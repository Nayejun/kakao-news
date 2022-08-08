import requests
from bs4 import BeautifulSoup

ROOT_URL = 'https://helloworld.kurly.com'


def import_posts():
    url = 'https://helloworld.kurly.com'
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'
    }
    data = requests.get(url, headers=headers)
    soup = BeautifulSoup(data.text, 'html.parser')
    find_posts = soup.find_all('li', class_='post-card')

    this_is_posts = []
    for find_post in find_posts:
        post = find_post.find(
            'a', class_='post-link')
        image = find_post.find(
            'img', attrs={'class': 'image-avatar'})
        title = find_post.find(
            'h3', class_='post-title').get_text()
        summary = find_post.find(
            'p', class_='title-summary')
        url = ROOT_URL + post.attrs['href']

        if (summary == None or image == None):
            this_is_posts.append({
                'title': title,
                'href': url,
            })
        else:
            this_is_posts.append({
                'title': title,
                'summary': summary.text,
                'href': url,
                'image': image.attrs['src'],
            })

    return this_is_posts
