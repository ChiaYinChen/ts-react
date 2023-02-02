FROM node:17-alpine3.14
WORKDIR ui
ADD . .

RUN npm install
RUN npm run build
