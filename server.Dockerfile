# Uses node version 24
FROM node:24

# Set the working directory
WORKDIR /

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the application code into the container
COPY . .

ENV PORT=3000
EXPOSE 3000

CMD ["npm", "start"]

# express
# cors
# pg
# express-session
# pug

# `docker build -t sample_hotel_app .`
# [+] Building 0.0s (1/1) FINISHED                                  docker:desktop-linux
#  => [internal] load build definition from Dockerfile                              0.0s
#  => => transferring dockerfile: 2B                                                0.0s
# ERROR: failed to build: failed to solve: failed to read dockerfile: open Dockerfile: no such file or directory