FROM node:latest

LABEL maintainer 'massy7124'

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm i -g yarn

CMD [ "yarn", "install" ]
CMD [ "yarn", "dev" ]
