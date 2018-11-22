FROM node:latest

MAINTAINER xiaowinner <yuanxiao225@vip.qq.com>

EXPOSE 80

COPY package.json package-lock.json ./
COPY . /usr/local/node
WORKDIR /usr/src/app
RUN npm install --registry=https://registry.npm.taobao.org
CMD ["npm","run","dev"] # 执行命令
