# 1. Install dependencies only when needed
FROM node:16-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /usr/app
COPY package.json package-lock.json ./
RUN npm install

# 2. Rebuild the source code only when needed
FROM node:16-alpine AS builder
WORKDIR /usr/app
COPY --from=deps /usr/app/node_modules ./node_modules
COPY . .
# Use the corresponding env file for each environment.
COPY .env.development .env.production
RUN yarn build

# 3. Production image, copy all the files and run next
FROM node:16-alpine AS runner
WORKDIR /usr/app

ENV NODE_ENV=production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /usr/app/next.config.js ./
COPY --from=builder /usr/app/public ./public
COPY --from=builder /usr/app/package.json ./package.json

# Automatically leverage output traces to reduce image size 
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /usr/app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /usr/app/.next/static ./.next/static


# Install PM2 globally to launch
RUN npm install --global pm2
RUN npm install next react-dom

EXPOSE 3000

ENV PORT 3000

USER nextjs

#!/bin/bash
# Launch app with PM2
CMD ["pm2-runtime", "start", "npm", "--", "start"]
