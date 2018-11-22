FROM daocloud.io/library/nginx:latest

MAINTAINER xiaowinner<yuanxiao225@vip.qq.com>

EXPOSE 8888

COPY views/index.html /usr/share/nginx/html
COPY dist /usr/share/nginx/html

CMD sed -i "s/ContainerID: /ContainerID: "$(hostname)"/g" /usr/share/nginx/html/index.html && nginx -g "daemon off;"


