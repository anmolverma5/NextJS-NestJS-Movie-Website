# AWS EC2 Deployment Guide

This guide will help you deploy the Next.js + NestJS Movie Website to AWS EC2.

## Prerequisites

- AWS EC2 instance running (Ubuntu/Amazon Linux)
- Node.js 20+ installed
- PM2 installed globally
- Nginx installed
- Git installed
- Domain name (optional, for production)

## Step 1: Connect to Your EC2 Instance

```bash
ssh ec2-user@your-ec2-ip
# or
ssh ubuntu@your-ec2-ip
```

## Step 2: Navigate to Project Directory

```bash
cd /var/www/html/NextJS-NestJS-Movie-Website
# or wherever your project is located
```

## Step 3: Install Dependencies

```bash
# Install all dependencies
npm run install:all

# Or manually:
npm install
cd frontend && npm install && cd ..
cd backend && npm install && cd ..
```

## Step 4: Set Up Environment Variables

### Backend Environment Variables

Create `backend/.env`:

```bash
cd backend
nano .env
```

Add the following:

```env
PORT=3001
NODE_ENV=production
FRONTEND_URL=http://your-domain.com
# or use your EC2 public IP
# FRONTEND_URL=http://your-ec2-ip

# JWT Secret (generate a strong secret)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# CORS
CORS_ORIGIN=http://your-domain.com
```

### Frontend Environment Variables

Create `frontend/.env.local`:

```bash
cd frontend
nano .env.local
```

Add the following:

```env
NEXT_PUBLIC_API_URL=http://your-domain.com:3001
# or use your EC2 public IP
# NEXT_PUBLIC_API_URL=http://your-ec2-ip:3001

NEXT_PUBLIC_UPLOAD_URL=http://your-domain.com:3001
# or use your EC2 public IP
# NEXT_PUBLIC_UPLOAD_URL=http://your-ec2-ip:3001
```

## Step 5: Build the Applications

```bash
# From project root
npm run build

# This will:
# 1. Build backend (creates dist folder)
# 2. Build frontend (creates .next folder)
```

## Step 6: Create Uploads Directory

```bash
# Create uploads directory for backend
mkdir -p backend/uploads
chmod 755 backend/uploads
```

## Step 7: Set Up PM2

### Create PM2 Ecosystem File

Create `ecosystem.config.js` in the project root:

```bash
nano ecosystem.config.js
```

Copy the content from the provided `ecosystem.config.js` file.

### Start Applications with PM2

```bash
# Start both applications
pm2 start ecosystem.config.js

# Save PM2 configuration
pm2 save

# Set PM2 to start on system reboot
pm2 startup
# Follow the instructions it provides
```

### PM2 Commands

```bash
# Check status
pm2 status

# View logs
pm2 logs

# Restart applications
pm2 restart all

# Stop applications
pm2 stop all

# Delete applications
pm2 delete all
```

## Step 8: Configure Nginx

### Install Nginx (if not installed)

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install nginx -y

# Amazon Linux
sudo yum install nginx -y
```

### Create Nginx Configuration

```bash
sudo nano /etc/nginx/sites-available/movie-website
# or for Amazon Linux:
sudo nano /etc/nginx/conf.d/movie-website.conf
```

Copy the content from the provided `nginx.conf` file.

### Enable the Site

```bash
# Ubuntu/Debian
sudo ln -s /etc/nginx/sites-available/movie-website /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

# Amazon Linux
sudo nginx -t
sudo systemctl restart nginx
```

## Step 9: Configure Firewall

```bash
# Allow HTTP and HTTPS
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Allow backend port (if not using nginx proxy)
sudo ufw allow 3001/tcp

# Enable firewall
sudo ufw enable
```

## Step 10: Configure AWS Security Groups

In AWS Console:
1. Go to EC2 → Security Groups
2. Select your instance's security group
3. Add inbound rules:
   - HTTP (port 80) from 0.0.0.0/0
   - HTTPS (port 443) from 0.0.0.0/0
   - Custom TCP (port 3001) from 0.0.0.0/0 (if needed)

## Step 11: Test the Deployment

1. **Backend API**: `http://your-domain.com:3001/api` (Swagger docs)
2. **Frontend**: `http://your-domain.com`
3. **Health Check**: `http://your-domain.com/api/health` (if implemented)

## Step 12: Set Up SSL (Optional but Recommended)

### Using Let's Encrypt (Free SSL)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y
# or for Amazon Linux:
sudo yum install certbot python3-certbot-nginx -y

# Get SSL certificate
sudo certbot --nginx -d your-domain.com

# Auto-renewal (already set up by certbot)
sudo certbot renew --dry-run
```

## Troubleshooting

### Check PM2 Logs

```bash
pm2 logs movie-backend
pm2 logs movie-frontend
```

### Check Nginx Logs

```bash
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log
```

### Restart Services

```bash
# Restart PM2
pm2 restart all

# Restart Nginx
sudo systemctl restart nginx
```

### Check Port Usage

```bash
# Check if ports are in use
sudo netstat -tulpn | grep :3001
sudo netstat -tulpn | grep :3000
```

## Maintenance

### Update the Application

```bash
cd /var/www/html/NextJS-NestJS-Movie-Website
git pull origin main
npm run install:all
npm run build
pm2 restart all
```

### Backup

```bash
# Backup uploads directory
tar -czf uploads-backup-$(date +%Y%m%d).tar.gz backend/uploads/
```

## Production Checklist

- [ ] Environment variables configured
- [ ] JWT_SECRET is strong and unique
- [ ] CORS configured correctly
- [ ] Nginx configured and running
- [ ] PM2 configured and running
- [ ] Firewall configured
- [ ] SSL certificate installed (recommended)
- [ ] Domain name configured
- [ ] Backups scheduled
- [ ] Monitoring set up (optional)

## Support

For issues, check:
1. PM2 logs: `pm2 logs`
2. Nginx logs: `sudo tail -f /var/log/nginx/error.log`
3. Application logs in respective directories
