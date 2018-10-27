# build stage
FROM node:9.11.1-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install --quiet
COPY . .
CMD ["yarn", "serve"]

# production stage
# FROM php:7.2-apache-stretch
# COPY --from=build-stage /app/dist /var/www/htm
# COPY apache.conf /etc/apache2/sites-available/main.conf
# RUN a2ensite main.conf
# RUN a2dissite 000-default.conf
# RUN a2enmod rewrite
