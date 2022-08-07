import json
from posts import import_posts


print('DONE ✅')

with open('view/src/mockups/post_list.json', 'w') as fp:
    json.dump(import_posts(), fp,
              ensure_ascii=False, default=str, indent=2)
    fp.write('\n')
