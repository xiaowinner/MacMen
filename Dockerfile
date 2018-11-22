FROM daocloud.io/library/node:latest

MAINTAINER xiaowinner<yuanxiao225@vip.qq.com>

EXPOSE 8888

ENV HOME=/home/app
COPY package.json package-lock.json $HOME/macmen/

WORKDIR $HOME/macmen
COPY . $HOME/macmen

RUN npm install --registry=https://registry.npm.taobao.org
CMD ["npm","start"]


