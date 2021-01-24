#!/bin/env

set -e

export BUILD_DESKTOP_APP_PATH=$PWD/build/desktop
export BUILD_MOBILE_APP_PATH=$PWD/build/mobile
export PORT=3000
export NODE_ENV=production
export APP_NAME=grin-app
export APP_ENV=dev

node $PWD/build/server/server.js