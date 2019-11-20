FROM node:10-alpine
RUN npm install -g typescript
ENV APPLICATION_HOME /usr/apps/simpleapp
COPY . $APPLICATION_HOME/
WORKDIR $APPLICATION_HOME
RUN npm run build
ENTRYPOINT ["sh", "-c"]
CMD ["exec npm start"]