FROM node:16.16.0-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
# RUN yarn lint
RUN yarn build-only --mode staging

# production stagee
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY prod_nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

