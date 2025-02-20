FROM node:latest
WORKDIR /app
RUN npm install
COPY . .
EXPOSE 8000
CMD ["node", "app.js"]
