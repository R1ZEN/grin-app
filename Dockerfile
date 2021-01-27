FROM node:14.15.3

ENV PORT=3000
ENV NODE_ENV=production
ENV BUILD_DESKTOP_APP_PATH=/usr/app/build/desktop
ENV BUILD_MOBILE_APP_PATH=/usr/app/build/mobile
ENV APP_NAME=grin-app
ENV APP_ENV=dev

WORKDIR /usr/app

# TODO: Bundle grin-server to prevent installing node_modules
RUN mkdir -p ./packages/grin-server
COPY packages/grin-server/package.json ./packages/grin-server
COPY build ./build
COPY package.json yarn.lock ./

RUN yarn --frozen-lockfile --prod

EXPOSE 3000

CMD ["node", "/usr/app/build/server/server.js"]


