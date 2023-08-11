# Start your image with a node base image
FROM node:16-alpine

# The /app directory should act as the main application directory
WORKDIR /app

# copy package files
COPY package.json ./
COPY package-lock.json ./

# Install node packages, install serve, build the app, and remove dependencies at the end
RUN npm install

# copy everything to /app directory
COPY ./ ./

EXPOSE 3003

# run the app
CMD ["npm", "start"]