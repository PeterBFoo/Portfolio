FROM --platform=linux/amd64 node:alpine as build

WORKDIR /app
RUN npm i -g @angular/cli

COPY . /app
RUN npm install
RUN ng build

FROM --platform=linux/amd64 nginx:alpine

COPY --from=build /app/dist/portfolio /usr/share/nginx/html
EXPOSE 80
EXPOSE 443
EXPOSE 8081