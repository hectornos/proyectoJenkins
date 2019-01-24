FROM node:carbon
WORKDIR /opt/front
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]
