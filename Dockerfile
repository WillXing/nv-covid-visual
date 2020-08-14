FROM node:lts-buster

WORKDIR /app

COPY . ./

RUN npm ci

RUN npm run build

ENTRYPOINT ["npm", "start"]