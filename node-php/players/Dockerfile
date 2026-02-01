FROM node:latest
WORKDIR /players
COPY package.json package-lock.json ./
RUN npm install
COPY server.js ./
EXPOSE 80
CMD ["node", "server.js"]