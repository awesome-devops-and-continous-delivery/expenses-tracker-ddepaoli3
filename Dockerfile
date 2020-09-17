FROM node:alpine
LABEL maintainer="Ivo von Putzer Reibegg <ivo.putzer@gmail.com>"

WORKDIR /usr/src

COPY ./ ./

RUN npm install --no-optional --no-progress

EXPOSE 8080

ENTRYPOINT [ "npm" ]
CMD [ "start" ]
