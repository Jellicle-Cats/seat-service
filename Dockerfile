FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
COPY prisma ./prisma/
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3001
RUN chown -R node /usr/src/app
CMD ["npm","run", "start:prod"]
