FROM node:latest
WORKDIR /display
RUN npm install serve -g
COPY . .
RUN echo "Hello world v2" >> ./display/message.txt
CMD serve ./display
