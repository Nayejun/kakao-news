import json
from pprint import pprint
import requests
from bs4 import BeautifulSoup

url = 'https://velog.io'

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'
}
data = requests.get(url, headers=headers)
soup = BeautifulSoup(data.text, 'html.parser')

title = soup.find('h4').get_text()

pprint(title)
print('제목이 등록되었습니다 !')

with open('view/src/mockups/text.json', 'w') as product_file:
    json.dump(title, product_file, default=str,
              ensure_ascii=False, indent=2)
    product_file.write('\n')
