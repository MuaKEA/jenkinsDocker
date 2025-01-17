# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install dependencies
RUN npm init -y && npm install

# Expose the port (dynamic, defined in Docker run)
EXPOSE $PORT

# Run the server
CMD ["node", "server.js"]

