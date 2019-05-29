# Use cached Docker Layers to avoid redundant package installs
FROM node:lts-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build:prod

# Production deployment
FROM nginx:stable-alpine as production
RUN rm /etc/nginx/conf.d/default.conf
RUN rm /etc/nginx/conf.d/examplessl.conf
COPY --from=build /app/dist /usr/share/nginx/html
COPY /nginx /etc/nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
