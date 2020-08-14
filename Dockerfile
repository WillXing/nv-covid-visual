FROM node:lts-buster

WORKDIR /app

COPY . ./

RUN npm ci

CMD npm run build ; npm start