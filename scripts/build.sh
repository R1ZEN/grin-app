#!/bin/env

set -e

export NODE_ENV=production

rm -rf ./build

echo "> Build Desktop and Mobile App"
rm -rf $PWD/projection/desktop/.next
rm -rf $PWD/projection/mobile/.next

npx next build $PWD/projection/desktop
npx next build $PWD/projection/mobile

mkdir $PWD/build

echo "> Build Server App"
mkdir $PWD/build/server
npx babel $PWD/packages/grin-server --extensions '.ts' --config-file $PWD/packages/grin-server/.babelrc.js -d $PWD/build/server

echo "> Copy Desktop Build"
mkdir $PWD/build/desktop
cp -R $PWD/projection/desktop/.next $PWD/build/desktop

echo "> Copy Mobile Build"
mkdir $PWD/build/mobile
cp -R $PWD/projection/mobile/.next $PWD/build/mobile

echo "> Copy Assets"
cp -R $PWD/public $PWD/build/desktop
cp -R $PWD/public $PWD/build/mobile