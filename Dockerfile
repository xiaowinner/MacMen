FROM node:latest

MAINTAINER xiaowinner ;''''''''''''-yu<yuanxiao225@vip.qq.com>

EXPOSE 80

ENV HOME=/home/app
COPY package.json package-lock.json $HOME/macmen/

WORKDIR $HOME/macmen
COPY . $HOME/macmen

RUN npm install --registry=https://registry.npm.taobao.org
CMD ["npm","run","dev"] # 执行命令


