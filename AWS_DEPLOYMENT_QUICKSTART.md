# AWS EC2 Deployment Quick Start Guide

## Quick Setup Steps

### 1. Connect to Your EC2 Instance

```bash
ssh ec2-user@your-ec2-ip
# or
ssh ubuntu@your-ec2-ip
```

### 2. Navigate to Project

```bash
cd /var/www/html/NextJS-NestJS-Movie-Website
```

### 3. Run Initial Setup Script

```bash
# Make script executable
chmod +x setup.sh

# Run setup
./setup.sh
```

This will:
- ✅ Check Node.js and PM2
- ✅ Install all dependencies
- ✅ Create necessary directories
- ✅ Create .env files (you'll need to update them)
- ✅ Build applications
- ✅ Start PM2

### 4. Update Environment Variables

#### Backend (.env)

```bash
nano backend/.env
```

Update with your values:
```env
PORT=3001
NODE_ENV=production
FRONTEND_URL=http://your-domain.com
# or http://your-ec2-ip

JWT_SECRET=your-strong-secret-key-here
CORS_ORIGIN=http://your-domain.com
```

#### Frontend (.env.local)

```bash
nano frontend/.env.local
```

Update with your values:
```env
NEXT_PUBLIC_API_URL=http://your-domain.com:3001
# or http://your-ec2-ip:3001

NEXT_PUBLIC_UPLOAD_URL=http://your-domain.com:3001
# or http://your-ec2-ip:3001
```

### 5. Rebuild and Restart

```bash
# Rebuild with new environment variables
npm run build

# Restart PM2
pm2 restart all
```

### 6. Configure Nginx

```bash
# Copy nginx configuration
sudo cp nginx.conf /etc/nginx/sites-available/movie-website
# or for Amazon Linux:
sudo cp nginx.conf /etc/nginx/conf.d/movie-website.conf

# Edit to replace your-domain.com with your actual domain/IP
sudo nano /etc/nginx/sites-available/movie-website
# or
sudo nano /etc/nginx/conf.d/movie-website.conf

# Test nginx configuration
sudo nginx -t

# Restart nginx
sudo systemctl restart nginx
```

### 7. Configure Firewall

```bash
# Allow HTTP, HTTPS, and Backend
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw allow 3001/tcp
sudo ufw enable
```

### 8. Configure AWS Security Group

In AWS Console:
1. Go to EC2 → Security Groups
2. Select your instance's security group
3. Add Inbound Rules:
   - HTTP (port 80) from 0.0.0.0/0
   - HTTPS (port 443) from 0.0.0.0/0
   - Custom TCP (port 3001) from 0.0.0.0/0

### 9. Test Your Deployment

- **Frontend**: `http://your-domain.com` or `http://your-ec2-ip`
- **Backend API**: `http://your-domain.com:3001/api` or `http://your-ec2-ip:3001/api`
- **Swagger Docs**: `http://your-domain.com:3001/api`

## Useful Commands

### PM2 Commands

```bash
# Check status
pm2 status

# View logs
pm2 logs

# Restart all
pm2 restart all

# Stop all
pm2 stop all

# Delete all
pm2 delete all
```

### Update Application

```bash
# Run deployment script
chmod +x deploy.sh
./deploy.sh

# Or manually:
git pull
npm run install:all
npm run build
pm2 restart all
```

### Check Services

```bash
# Check PM2
pm2 status

# Check Nginx
sudo systemctl status nginx

# Check ports
sudo netstat -tulpn | grep :3001
sudo netstat -tulpn | grep :3000
```

## Troubleshooting

### PM2 Not Starting

```bash
# Check logs
pm2 logs movie-backend
pm2 logs movie-frontend

# Check if ports are in use
sudo lsof -i :3001
sudo lsof -i :3000
```

### Nginx Not Working

```bash
# Check nginx logs
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log

# Test configuration
sudo nginx -t

# Restart nginx
sudo systemctl restart nginx
```

### Application Not Accessible

1. Check firewall: `sudo ufw status`
2. Check AWS Security Group rules
3. Check PM2 status: `pm2 status`
4. Check application logs: `pm2 logs`

## SSL Setup (Optional but Recommended)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y
# or for Amazon Linux:
sudo yum install certbot python3-certbot-nginx -y

# Get SSL certificate
sudo certbot --nginx -d your-domain.com

# Auto-renewal is set up automatically
```

## Production Checklist

- [ ] Environment variables configured
- [ ] JWT_SECRET is strong and unique
- [ ] CORS configured correctly
- [ ] Nginx configured and running
- [ ] PM2 configured and running
- [ ] Firewall configured
- [ ] AWS Security Group configured
- [ ] SSL certificate installed (recommended)
- [ ] Domain name configured (if using)
- [ ] Applications accessible via browser

## Support

For detailed information, see `DEPLOYMENT.md`

