# Build stage
FROM node:16-alpine as builder

# Create app directory
WORKDIR /usr/src/app

# Copying package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install --silent && \
    npm prune --production && \
    npm cache clean --force

# Copy prisma schema and generate prisma client
COPY prisma ./prisma/
RUN npx prisma generate

# Copy application source
COPY . .

# Final stage
FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy built node modules and Prisma client
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/prisma ./prisma
COPY --from=builder /usr/src/app ./

# Set environment variables
ENV NODE_ENV=production \
    DATABASE_URL="" \
    USER_SERVICE_ENDPOINT=""

# Bind to port 3001
EXPOSE 3001

# Use the non-root user provided by the Node image
USER node

# Start your app
CMD ["npm","run", "start:prod"]