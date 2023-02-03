from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.wait import WebDriverWait

import csv


class Scrapper:
    def __init__(self):
        self.driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

    def get_data(self) -> str:
        URL = "https://ipm.ucanr.edu/PMG/diseases/diseaseslist.html";
        Base_URL = "https://ipm.ucanr.edu"
        self.driver.get(URL)
        listings = self.driver.find_elements(By.CSS_SELECTOR, "table[id='ALLDISEASES'] tbody tr")
        file_name = "plant_diseases.csv"
        keys = [key.lower() for key in ["Hosts", "Symptoms", "Conditions favoring disease", "Prevention and management", "Identification", "Life cycle",
                "Solutions", "DAMAGE", "IDENTIFICATION AND BIOLOGY", "INFECTION", "Viruses"]]
        tr = listings[5]
        tds = tr.find_elements(By.TAG_NAME, 'td')
        host = tds[0].text
        cn_td = tds[1].find_element(By.TAG_NAME, 'a')
        common_name = cn_td.text
        scientific_name = tds[2].text
        dType = tds[3].text
        cn_td.click()
        try:
            info_tb = WebDriverWait(self.driver, timeout=3).until(lambda d: d.find_elements(By.CSS_SELECTOR, "table[class='layout'] tbody tr td"))
            if len(info_tb) == 2:
                if info_tb[0].find_element(By.TAG_NAME, 'img'):
                    img_lnks = ", ".join([img.get_attribute('src') for img in info_tb[0].find_elements(By.TAG_NAME, "img")])
                    info_text = info_tb[1].text
                else:
                    img_lnks = ", ".join([img.get_attribute('src') for img in info_tb[1].find_elements(By.TAG_NAME, "img")])
                    info_text = info_tb[0].text
            else:
                if info_tb.find_element(By.TAG_NAME, 'img'):
                    img_lnks = ", ".join([img.get_attribute('src') for img in info_tb.find_elements(By.TAG_NAME, "img")])
                    info_text = "No Information Available"
                else:
                    info_text = info_tb.text

            dict_text = {key:"" for key in keys}
            filtered_info_text = "<<NL>>".join([txt for txt in info_text.split("\n") if
                                  "For more information" not in txt
                                  and "Pest Notes:" not in txt])

            split_text = [txt.lower() for txt in info_text.split("\n") if
                                  "For more information" not in txt
                                  and "Pest Notes:" not in txt]

            # if split_text[0] not in keys and len(split_text) >=2:
            #     dictText["title"] = {
            #         split_text[0] :
            #     }
            print(split_text)
            try:
                current = {}
                using = 0
                arr = []
                for k in keys:
                    if k in split_text:
                        s_i = split_text.index(k)
                        if using != k:
                            current[k] = [s_i]
                            if using != 0:
                                currList = current[using]
                                currList.append(s_i - 1)
                                current[using] = currList
                        using = k

                print(current, "why not")
            except:
                print('failed')



        except:
            img_lnks = ", ".join([img.get_attribute('src') for img in self.driver.find_elements(By.CSS_SELECTOR,
                                                                                            "table[id='pagecolumns'] tbody tr div[class='pnphotobox'] img")])
            info_text = "<<VISIT>>" + str(self.driver.current_url)

        # print(host, common_name, scientific_name, dType, "moved",img_lnks , filtered_info_text)



        # with open(file_name, 'w', encoding='UTF8') as file:
        #     writer = csv.write(file)
        #     writer.writerow(['plant or Crop Host', 'Common name', 'Scientific name', 'Type', ])
        #     for tr in listings:
        #         title = tr.find_elements(By.CSS_SELECTOR, "a")[1].text
        #         peak = int(tr.find_elements(By.CSS_SELECTOR, "td")[-2].text.replace(",", ""))
        #         writer.writerow([title, peak])
        # return file_name
        while True:
            pass

    # def send_data_to_email(self, to_addr: str):
    #     file_name = self.get_data()
    #     with smtplib.SMTP("smtp.gmail.com") as session:
    #         session.starttls("jlee24281@gmail.com", "fdjdjbwngoyrdapn")
    #         session.login()
    #         msg = MIMEMultipart()
    #         msg
