FROM node:lts

WORKDIR /usr/src/app

COPY ./ /usr/src/app/

RUN npm install

ENTRYPOINT [ "npm" ]

CMD [ "run", "start" ]