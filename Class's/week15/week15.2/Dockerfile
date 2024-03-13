FROM node:20

WORKDIR /usr/src/app
# To make sore that the docker file runs in minimal time or minimal steps. we need to cached as much as u can so for that we can make to 
# The npm install is the most expensive step so to minimize it we can copy the package* to . and only run if we change it and by decreasing time of completion
COPY package* . 
COPY ./prisma .

RUN npm install
RUN npx prisma generate

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/index.js"]
