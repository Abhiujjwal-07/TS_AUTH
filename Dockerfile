
FROM node:14-slim
WORKDIR /src/
COPY package.json ./
COPY tsconfig.json ./
COPY src ./src

RUN npm install
RUN npm run build 
# FROM node:17.6.0-alpine as builder
# WORKDIR /TS_AUTH
# COPY package*.json ./
# RUN npm config set unsafe-perm true
# RUN npm install

# FROM node:14 as tsBuilder
# WORKDIR /TS_AUTH
# COPY tsconfig.json ./
# COPY . /TS_AUTH
# RUN npm install
# CMD ["npm", "start"]


# FROM node:17.6.0-alpine
# WORKDIR /TS_AUTH
# COPY package.json ./
# COPY tsconfig.json ./
# COPY . /TS_AUTH
# RUN ls -a
# RUN npm install

# ## this is stage two , where the app actually runs
# FROM node:14-slim
# WORKDIR /TS_AUTH
# COPY package.json ./
# RUN npm install
# COPY /TS_AUTH .
# RUN npm install
# CMD ["npm","start"]
FROM node:slim
WORKDIR /src
COPY package.json ./
COPY tsconfig.json ./
COPY /src/dist .
RUN ls -a
RUN npm install
CMD ["npm","start"]
