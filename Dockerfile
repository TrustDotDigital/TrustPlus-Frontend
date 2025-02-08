# Use official Node.js image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy project files
COPY . .

# Build Next.js app
RUN npm run build

# Expose port 8080 for Cloud Run
EXPOSE 8080

# Start the Next.js app
CMD ["npm", "run", "start"]
