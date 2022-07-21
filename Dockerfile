FROM node:lts-alpine3.15

COPY ./package*.json .

RUN npm install

COPY . .

CMD [ "npm", "start" ]