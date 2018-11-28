FROM node:alpine

ARG ENV

COPY . /app

WORKDIR /app

RUN set -x \
  && echo "ENV=${ENV}" \
  && if [ "${ENV}" != "development" ]; then \
    npm i --only=production; \
    npm cache clean --force; \
  fi

CMD [ "node", "server.js" ]
