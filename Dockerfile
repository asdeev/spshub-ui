# Build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
