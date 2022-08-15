import requests
from bs4 import BeautifulSoup

ROOT_URL = 'https://tech.kakao.com/blog/'


def import_posts():
    url = "https://tech.kakao.com/blog/page/1/#posts"

    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'
    }

    data = requests.get(url, headers=headers)
    soup = BeautifulSoup(data.text, 'html.parser')
    find_posts = soup.find_all('div', class_='elementor-post__text')

    this_is_posts = []

    for find_post in find_posts:
        post = find_post.find_all(
            'div', class_='elementor-post__text')
        title = find_post.find(
            'h3').find('a').get_text()
        title_arrangement = title.replace('\t', '').replace('\n', '')
        href = find_post.find(
            'h3').find('a')
        this_is_posts.append({
            'title': title_arrangement,
            'href': href
        })

    return this_is_posts
