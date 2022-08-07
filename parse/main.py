import json
from posts import import_posts


print('DONE ✅')

with open('view/src/mockups/post_list.json', 'w') as product_file:
    json.dump(import_posts(), product_file,
              ensure_ascii=False, default=str, indent=2)
    product_file.write('\n')
