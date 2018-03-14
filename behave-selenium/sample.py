import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By

class Sampletest(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Firefox()

    def pypi_test(self):
        self.driver.get("https://pypi.python.org/pypi")
        self.driver.find_element(By.ID, "term").send_keys("Selenium")
        self.driver.find_element(By.ID, "submit").click()

    def tearDown(self):
        self.driver.quit()