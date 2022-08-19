import json
from posts import import_posts


print('DONE ✅')

with open('view/소스/데이터/리스트.json', 'w') as fp:
    json.dump(import_posts(), fp,
              ensure_ascii=False, default=str, indent=2)
    fp.write('\n')
