# Uses node version 24
FROM node:24

# Set the working directory
WORKDIR /usr/app
COPY ./ /usr/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the application code into the container
COPY . .

ENV PORT=3000
EXPOSE 3000

CMD ["npm", "start"]

# Building: docker build -f server.Dockerfile -t sample_hotel_app .
# Running: docker run -p 3000:3000 sample_hotel_app
# Open: http://localhost:3000/