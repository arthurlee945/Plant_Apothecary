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
        URL = "https://ipm.ucanr.edu/PMG/diseases/diseaseslist.html"
        self.driver.get(URL)
        listings = self.driver.find_elements(By.CSS_SELECTOR, "table[id='ALLDISEASES'] tbody tr")
        file_name = "plant_diseases.csv"
        with open(file_name, 'w', encoding='UTF8') as file:
            writer = csv.write(file)
            writer.writerow(['plant or Crop Host', 'Common name', 'Scientific name', 'Type', ])
            for tr in listings:
                title = tr.find_elements(By.CSS_SELECTOR, "a")[1].text
                peak = int(tr.find_elements(By.CSS_SELECTOR, "td")[-2].text.replace(",", ""))
                writer.writero([title, peak])
        return file_name

    # def send_data_to_email(self, to_addr: str):
    #     file_name = self.get_data()
    #     with smtplib.SMTP("smtp.gmail.com") as session:
    #         session.starttls("jlee24281@gmail.com", "fdjdjbwngoyrdapn")
    #         session.login()
    #         msg = MIMEMultipart()
    #         msg
