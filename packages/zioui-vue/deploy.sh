#!/usr/bin/env sh

# 发生错误时终止
set -e

rm -rf docs/.vitepress/dist &&
yarn docs:build &&
cd docs/.vitepress/dist &&
git init &&
git add . &&
git commit -m 'deploy website' &&
git branch -M main &&
git remote add origin git@github.com:gjf610/zioui-website.git
git push -f -u origin main
cd -
echo https://gjf610.github.io/zioui-website/index.html