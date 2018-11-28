FROM node:alpine

ARG ENV

COPY . /app

WORKDIR /app

RUN set -x \
  && apk add openssh-client rsync --no-cache \
  && mkdir -p /data \
  && ssh-keygen -t rsa -N "" -f ~/.ssh/id_rsa \
  && echo "ENV=${ENV}" \
  && if [ "${ENV}" != "development" ]; then \
    npm i --only=production; \
    npm cache clean --force; \
  fi

CMD [ "node", "server.js" ]
