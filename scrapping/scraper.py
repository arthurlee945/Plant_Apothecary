from selenium import webdriver
from selenium.common import NoSuchElementException, TimeoutException
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.wait import WebDriverWait

import csv


class Scrapper:
    def __init__(self):
        self.driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

    def processor(self, tr):
        keys = [key.lower() for key in ["Hosts", "Symptoms", "Conditions favoring disease", "Prevention and management", "Identification", "Life cycle",
                "Solutions", "DAMAGE", "IDENTIFICATION AND BIOLOGY", "INFECTION", "Viruses"]]
        dict_text = {key: "" for key in keys}
        tds = tr.find_elements(By.TAG_NAME, 'td')
        host = tds[0].text
        cn_td = tds[1].find_element(By.TAG_NAME, 'a')
        common_name = cn_td.text
        scientific_name = tds[2].text
        dType = tds[3].text
        cn_td.click()
        try:
            try:
                init = WebDriverWait(self.driver, timeout=4).until(
                    lambda d: d.find_element(By.CSS_SELECTOR, "table[class='layout'] >tbody >tr"))
                info_tb = init.find_elements(By.XPATH, "./*")
                if len(info_tb) == 1:
                    img_lnks = ""
                    info_text = info_tb[0].text
                else:
                    try:
                        info_tb[0].find_element(By.TAG_NAME, "img")
                        img_lnks = "<<SPLIT>>".join(
                            [img.get_attribute('src') for img in info_tb[0].find_elements(By.TAG_NAME, "img")])
                        info_text = info_tb[1].text
                    except NoSuchElementException:
                        info_tb[1].find_element(By.TAG_NAME, "img")
                        img_lnks = "<<SPLIT>>".join(
                            [img.get_attribute('src') for img in info_tb[1].find_elements(By.TAG_NAME, "img")])
                        info_text = info_tb[0].text

            except TimeoutException:
                try:
                    one_item = WebDriverWait(self.driver, timeout=4).until(
                        lambda d: d.find_element(By.CSS_SELECTOR, "td[id='contentarea'] "
                                                                  ">table[class='layout']:not(table[class='menuarea']):not(table[id='tableofcontents']) >tbody >tr >td"))
                    img_lnks = ""
                    info_text = one_item.text
                except TimeoutException:
                    one_item = WebDriverWait(self.driver, timeout=4).until(
                        lambda d: d.find_element(By.CSS_SELECTOR, "td[id='contentarea'] "
                                                                  ">table:nth-of-type(2):not(table[class='menuarea']):not(table[id='tableofcontents']) >tbody >tr >td"))
                    img_lnks = ""
                    info_text = one_item.text

            split_text = [txt.lower() for txt in info_text.split("\n") if
                          "For more information" not in txt
                          and "Pest Notes:" not in txt]
            current = {}
            using = 0
            for k in keys:
                if k in split_text:
                    if using != k:
                        s_i = split_text.index(k)
                        current[k] = [s_i + 1]
                        if using != 0:
                            currList = current[using]
                            currList.append(s_i - 1)
                            current[using] = currList
                    using = k
            f_curr_pos = current[list(current.keys())[0]][0]
            last = [last for i, last in enumerate(current) if i == len(current) - 1][0]
            current[last] = [current[last][0], len(split_text) - 1]
            if split_text[0] not in keys and len(split_text) >= 2:
                dict_text["title"] = {
                    split_text[0]: " ".join([txt for i, txt in enumerate(split_text) if i >= 1 and i < f_curr_pos - 1])
                }
            else:
                dict_text["title"] = {"": ""}

            for k in current:
                dict_text[k] = " ".join([txt for i, txt in enumerate(split_text)
                                         if i >= current[k][0] and i <= current[k][1]])
        except (NoSuchElementException, TimeoutException, IndexError):
            img_lnks = "<<SPLIT>>".join([img.get_attribute('src') for img in self.driver.find_elements(By.CSS_SELECTOR,
                                                                                                "table[id='pagecolumns'] tbody tr div[class='pnphotobox'] img")])
            dict_text["title"] = {"<<VISIT>>" + str(self.driver.current_url) : ""}

        return [host, common_name, scientific_name, dType, img_lnks, dict_text["hosts"],
                dict_text["symptoms"], dict_text["conditions favoring disease"], dict_text["prevention and management"],
                dict_text["identification"], dict_text["life cycle"], dict_text["solutions"], dict_text["damage"],
                dict_text["identification and biology"], dict_text["infection"], dict_text["viruses"], list(dict_text['title'].keys())[0], list(dict_text['title'].values())[0]]

    def get_data(self) -> str:
        URL = "https://ipm.ucanr.edu/PMG/diseases/diseaseslist.html"
        Base_URL = "https://ipm.ucanr.edu"
        self.driver.get(URL)
        listings = self.driver.find_elements(By.CSS_SELECTOR, "table[id='ALLDISEASES'] tbody tr")
        file_name = "plant_diseases.csv"

        rows = ['plant or crop host', 'common name', 'scientific name', 'type', "imgLinks", "hosts", 'symptoms',
                "conditions favoring disease", "prevention and management", "identification", "life cycle", "solutions",
                "damage", "identification and biology", "infection", "viruses", "title name", "title description"]
        # s = self.processor(listings[313])
        # print(s)
        with open(file_name, 'w', encoding='UTF8', newline='') as file:
            writer = csv.writer(file)
            writer.writerow(rows)
            # for i,tr in enumerate(listings):
            #     print(tr)
            #     WebDriverWait(self.driver, timeout=7).until(
            #         lambda d: d.find_elements(By.CSS_SELECTOR, "table[id='ALLDISEASES'] >tbody >tr"))
            #     writer.writerow(self.processor(tr))
            #     self.driver.back()
            for i in range(0,len(listings)):
                list = WebDriverWait(self.driver, timeout=7).until(
                    lambda d: d.find_elements(By.CSS_SELECTOR, "table[id='ALLDISEASES'] >tbody >tr"))
                data = self.processor(list[i])
                print(i, data)
                writer.writerow(data)
                self.driver.back()

        while True:
            pass
