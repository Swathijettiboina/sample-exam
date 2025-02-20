FROM node:latest
WORKDIR /app
COPY . .
EXPOSE 8000
CMD ["node", "app.js"]
