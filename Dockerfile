# Use cached Docker Layers to avoid redundant package installs
FROM node:lts-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build:prod

# Production deployment
FROM nginx:stable-alpine as production
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/nginx /usr/share/nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
