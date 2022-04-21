FROM node:14.17-alpine3.13 as builder

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json
RUN npm i -g
COPY . .
RUN yarn build:production

FROM nginx 

WORKDIR /usr/share/nginx/html

COPY default.conf.template /etc/nginx/conf.d/default.conf.template
COPY nginx.conf /etc/nginx/nginx.conf

RUN rm -rf ./*

COPY --from=builder /app/build .

CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'