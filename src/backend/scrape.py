from bs4 import BeautifulSoup as bs
import requests

content = requests.get("https://www.caringseniorservice.com/blog/senior-discount-guides-where-to-save-money-at-50-to-65").text
content

soup = bs(content, 'html.parser')

bodySoup = soup.find('div', {'class': 'ucBlogPostBody'}).find('article')
print(bodySoup.find_all('li'))
for li in bodySoup.find_all('li'):
  name=li.find('strong').text
  discount=li.text.split(': ')[-1].split('(')[0]
  age=li.text.split("(")[-1] if len(li.text.split("(")) > 1 else ''


  if '+' in age:
    age = int(age[:-2])
  else:
    age = None
    
  print(name.strip(':'), '|', discount, '|', age)w