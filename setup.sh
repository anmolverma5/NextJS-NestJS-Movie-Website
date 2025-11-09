#!/bin/bash

# Initial setup script for AWS EC2
# Usage: ./setup.sh

set -e

echo "🔧 Starting initial setup..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check Node.js version
echo -e "${YELLOW}📋 Checking Node.js version...${NC}"
node_version=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$node_version" -lt 20 ]; then
    echo -e "${RED}Error: Node.js 20+ is required. Current version: $(node -v)${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Node.js version: $(node -v)${NC}"

# Check PM2
echo -e "${YELLOW}📋 Checking PM2...${NC}"
if ! command -v pm2 &> /dev/null; then
    echo -e "${YELLOW}Installing PM2...${NC}"
    npm install -g pm2
fi
echo -e "${GREEN}✅ PM2 installed: $(pm2 -v)${NC}"

# Install dependencies
echo -e "${YELLOW}📦 Installing dependencies...${NC}"
npm run install:all

# Create necessary directories
echo -e "${YELLOW}📁 Creating necessary directories...${NC}"
mkdir -p backend/uploads
mkdir -p logs
chmod 755 backend/uploads

# Create .env files if they don't exist
echo -e "${YELLOW}📝 Setting up environment variables...${NC}"

if [ ! -f "backend/.env" ]; then
    echo -e "${YELLOW}Creating backend/.env...${NC}"
    cat > backend/.env << EOF
PORT=3001
NODE_ENV=production
FRONTEND_URL=http://localhost:3000
JWT_SECRET=$(openssl rand -base64 32)
CORS_ORIGIN=http://localhost:3000
EOF
    echo -e "${GREEN}✅ Created backend/.env${NC}"
    echo -e "${YELLOW}⚠️  Please update backend/.env with your actual values!${NC}"
fi

if [ ! -f "frontend/.env.local" ]; then
    echo -e "${YELLOW}Creating frontend/.env.local...${NC}"
    cat > frontend/.env.local << EOF
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_UPLOAD_URL=http://localhost:3001
EOF
    echo -e "${GREEN}✅ Created frontend/.env.local${NC}"
    echo -e "${YELLOW}⚠️  Please update frontend/.env.local with your actual values!${NC}"
fi

# Build applications
echo -e "${YELLOW}🔨 Building applications...${NC}"
npm run build

# Setup PM2
echo -e "${YELLOW}🚀 Setting up PM2...${NC}"
pm2 start ecosystem.config.js
pm2 save

# Setup PM2 startup
echo -e "${YELLOW}⚙️  Setting up PM2 startup...${NC}"
pm2_startup=$(pm2 startup | grep -o 'sudo.*')
if [ ! -z "$pm2_startup" ]; then
    echo -e "${YELLOW}Run this command to enable PM2 on startup:${NC}"
    echo -e "${GREEN}$pm2_startup${NC}"
fi

echo -e "${GREEN}✅ Setup completed successfully!${NC}"
echo -e "${YELLOW}📝 Next steps:${NC}"
echo -e "1. Update backend/.env with your domain/IP and JWT_SECRET"
echo -e "2. Update frontend/.env.local with your API URLs"
echo -e "3. Configure Nginx (see DEPLOYMENT.md)"
echo -e "4. Run: pm2 status (to check application status)"
echo -e "5. Run: pm2 logs (to view logs)"

