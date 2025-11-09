#!/bin/bash

# Deployment script for AWS EC2
# Usage: ./deploy.sh

set -e

echo "🚀 Starting deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo -e "${RED}Error: package.json not found. Please run this script from the project root.${NC}"
    exit 1
fi

# Step 1: Pull latest changes
echo -e "${YELLOW}📥 Pulling latest changes from Git...${NC}"
git pull origin main || git pull origin master

# Step 2: Install dependencies
echo -e "${YELLOW}📦 Installing dependencies...${NC}"
npm run install:all

# Step 3: Create necessary directories
echo -e "${YELLOW}📁 Creating necessary directories...${NC}"
mkdir -p backend/uploads
mkdir -p logs
chmod 755 backend/uploads

# Step 4: Build applications
echo -e "${YELLOW}🔨 Building applications...${NC}"
npm run build

# Step 5: Restart PM2
echo -e "${YELLOW}🔄 Restarting PM2 applications...${NC}"
pm2 restart ecosystem.config.js || pm2 start ecosystem.config.js

# Step 6: Save PM2 configuration
pm2 save

echo -e "${GREEN}✅ Deployment completed successfully!${NC}"
echo -e "${GREEN}📊 Check status with: pm2 status${NC}"
echo -e "${GREEN}📝 View logs with: pm2 logs${NC}"

