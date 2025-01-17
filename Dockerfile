FROM node:18

WORKDIR /app
COPY . /app

# Add build arguments
ARG RESPONSE_MESSAGE
ARG PORT

# Set environment variables using the build arguments
ENV RESPONSE_MESSAGE=${RESPONSE_MESSAGE}
ENV PORT=${PORT}

# Expose the port
EXPOSE ${PORT}

# Start the application
CMD ["node", "server.js"]
