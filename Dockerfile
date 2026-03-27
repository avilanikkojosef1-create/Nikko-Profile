# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Replace 8080 with the PORT environment variable at runtime
CMD sed -i -e 's/8080/'"${PORT:-8080}"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
