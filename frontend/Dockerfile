# Stage 1: Build the Angular app with Node.js
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Angular app
RUN npm run build -- --configuration=production

# Stage 2: Use Nginx to serve the Angular app
FROM nginx:alpine

# Copy the built Angular app from the build stage to Nginx's directory
COPY --from=build /app/dist/browser /usr/share/nginx/html

# Nginx configuration for Angular routing
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# Expose the default port
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]


