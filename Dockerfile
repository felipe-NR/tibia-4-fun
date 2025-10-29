FROM node:22.21.0-slim

RUN apt-get update

RUN npm i -g turbo@2.5.8

USER node

WORKDIR /home/node/tibia-4-fun

CMD ["tail", "-f", "/dev/null"]
