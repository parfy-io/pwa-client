FROM node:11-alpine as build
MAINTAINER rainu <rainu@raysha.de>

ENV NODE_ENV "production"

COPY ./assets /src/assets
COPY ./components /src/components
COPY ./layouts /src/layouts
COPY ./locales /src/locales
COPY ./middleware /src/middleware
COPY ./pages /src/pages
COPY ./plugins /src/plugins
COPY ./static /src/static
COPY ./store /src/store
COPY ./webworker /src/webworker
COPY ./nuxt.config.js /src/
COPY ./package.json /src/

WORKDIR /src/

RUN apk --update --no-cache add git python make g++ &&\
    npm i &&\
    npm run build

FROM nginx:alpine
COPY --from=build /src/dist /usr/share/nginx/html
