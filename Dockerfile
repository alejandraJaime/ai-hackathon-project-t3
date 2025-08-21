# Use the official Node.js 20 image.
FROM node:20-alpine

# Set the working directory in the container.
WORKDIR /app

# Install dependencies for native modules and git (if needed)
RUN apk add --no-cache libc6-compat git

# Copy package.json and package-lock.json to the working directory.
COPY package*.json ./

# Install dependencies with npm ci for faster, reliable, reproducible builds
RUN npm ci --only=production=false

# Copy the rest of the application code to the working directory.
# Note: In development with volumes, this will be overridden by the mounted volume
COPY . .

# Expose port 3000 to the outside world.
EXPOSE 3000

# Set NODE_ENV to development for better error messages and hot reloading
ENV NODE_ENV=development

# The command to run for local testing.
CMD ["npm", "run", "dev"]
