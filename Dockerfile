# Use a lightweight Node.js image as the base
FROM node:22 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json first for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app for production
RUN npm run build

# Expose port 80
EXPOSE 5173

# Start the web server
CMD ["npm", "run", "dev"]
