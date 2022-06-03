# pull the official base image
FROM node:12.18.1-alpine
# set working direction
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install application dependencies
COPY package.json ./
COPY package-lock.json ./
# add app
COPY . ./
RUN npm i
EXPOSE 3000
# start app
CMD ["npm", "start"]