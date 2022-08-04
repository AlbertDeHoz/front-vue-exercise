FROM node:18-alpine3.15

EXPOSE 3000
WORKDIR /app

COPY ./package.json /app

RUN npm install

COPY ./ /app

ENTRYPOINT ["npm", "run","dev"]
