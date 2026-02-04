FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g nodemon
COPY server.js ./
RUN mv /app/node_modules /node_modules
EXPOSE 80
CMD ["nodemon", "server.js"]