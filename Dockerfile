# Use a base image with Node.js installed
FROM node:14 as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install project dependencies
RUN npm ci

# Copy the entire project to the working directory
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight web server image
FROM nginx:stable-alpine

# Copy the built app from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# Start the web server when the container launches
CMD ["nginx", "-g", "daemon off;"]
