FROM node:8

WORKDIR /opt/codigo

COPY . .

EXPOSE 3000
CMD ["node", "app.js"]
