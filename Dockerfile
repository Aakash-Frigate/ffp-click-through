# Build stage
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Set build-time environment variables for Next.js
ARG NEXT_PUBLIC_FFP_BACKEND_URL
ARG NEXT_PUBLIC_FFP_URL
ENV NEXT_PUBLIC_FFP_BACKEND_URL=$NEXT_PUBLIC_FFP_BACKEND_URL
ENV NEXT_PUBLIC_FFP_URL=$NEXT_PUBLIC_FFP_URL

# Build the project
RUN pnpm build

# Production stage
FROM node:20-alpine AS production

# Set working directory
WORKDIR /app

# Install curl for healthcheck
RUN apk add --no-cache curl

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Copy built standalone application from builder
# These paths are standard for Next.js standalone output
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Expose port 3000
EXPOSE 3000

# Run the application
CMD ["node", "server.js"]
