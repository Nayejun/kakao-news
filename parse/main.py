from urllib.request import urlopen
from bs4 import BeautifulSoup

url = urlopen('Mock URL')
soup = BeautifulSoup(url.read(), 'html.parser')
get = soup.find("p", "this-is-title")

print(get)
