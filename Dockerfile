# Stage 0, based on Node.js, to build and compile Angular
FROM node:latest as node
WORKDIR /app
COPY ./yatawaki-web-admin /app/
RUN npm install --legacy-peer-deps
RUN npm run build:docker

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:alpine
COPY --from=node /app/dist/yatawaki-web-admin /usr/share/nginx/html
COPY ./yatawaki-web-admin/nginx-custom.conf /etc/nginx/conf.d/default.conf
