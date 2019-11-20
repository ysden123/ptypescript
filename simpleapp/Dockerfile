FROM node:10-alpine
ENV APPLICATION_HOME /usr/apps/simpleapp

RUN npm run build

COPY dist $APPLICATION_HOME/

WORKDIR $APPLICATION_HOME
ENTRYPOINT ["sh", "-c"]
CMD ["exec node app.js"]