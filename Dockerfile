FROM node:22-bookworm-slim

# Set the working directory
WORKDIR /app

# Install dependencies
RUN apt-get update && apt-get install -y python3 make g++ postgresql-client

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy prisma schema
COPY prisma/schema.prisma prisma/schema.prisma

# Generate Prisma client (doesn't need DB connection)
RUN npx prisma generate

# Copy the rest of your app
COPY . .

EXPOSE 3000

# Create an entrypoint script
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

CMD ["/entrypoint.sh"]