FROM node:latest
WORKDIR /players
RUN npm install -g nodemon 
COPY package*.json ./
RUN npm install
RUN mv /players/node_modules /node_modules
COPY server.js ./
EXPOSE 80
CMD ["nodemon", "server.js"]