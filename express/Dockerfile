# Layer 1
FROM node:latest 

# Layer 2
WORKDIR /app

# Layer 3
COPY package.json package-lock.json ./
# Layer 4
RUN npm install

# Layer 5
COPY index.js .

# Layer 6
EXPOSE 3000

# Layer 7
CMD ["node", "index.js"]