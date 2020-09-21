FROM node:alpine
LABEL maintainer="Ivo von Putzer Reibegg <ivo.putzer@gmail.com>"

ENV NODE_ENV=production

WORKDIR /usr/src
COPY package.json package-lock.json ./

RUN npm install --no-optional --no-progress\
 && npm cache clean --force --silent

COPY ./ ./

EXPOSE 80

ENTRYPOINT [ "npm" ]
CMD [ "start" ]
