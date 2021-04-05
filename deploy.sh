rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:dana-wang9527/pear-UI.git &&
git push -f -u origin master &&
cd ..
