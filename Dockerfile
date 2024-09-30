From alpine:latest

WORKDIR app

COPY . .

RUN apk update
RUN apk add npm
RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
