# Manual Setup Commands for AWS EC2

Follow these commands step by step on your EC2 instance.

## Step 1: Navigate to Project Directory

```bash
cd /var/www/html/NextJS-NestJS-Movie-Website
```

## Step 2: Check Node.js and npm

```bash
node -v
npm -v
```

If Node.js is not installed or version is less than 20:
```bash
# Install Node.js 20+ (choose one method)

# Method 1: Using nvm (recommended)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 20
nvm use 20

# Method 2: Using NodeSource (Ubuntu/Debian)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Method 3: Using NodeSource (Amazon Linux)
curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
sudo yum install -y nodejs
```

## Step 3: Install PM2 Globally

```bash
npm install -g pm2
pm2 -v
```

## Step 4: Install Project Dependencies

```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
cd ..

# Install backend dependencies
cd backend
npm install
cd ..
```

## Step 5: Create Necessary Directories

```bash
# Create uploads directory for backend
mkdir -p backend/uploads
chmod 755 backend/uploads

# Create logs directory for PM2
mkdir -p logs
```

## Step 6: Create Backend Environment File

```bash
cd backend
nano .env
```

Add the following content (replace with your values):
```env
PORT=3001
NODE_ENV=production
FRONTEND_URL=http://your-ec2-ip
JWT_SECRET=your-strong-secret-key-here
CORS_ORIGIN=http://your-ec2-ip
```

Save and exit (Ctrl+X, then Y, then Enter)

Generate a strong JWT secret:
```bash
openssl rand -base64 32
```
Copy the output and use it as JWT_SECRET in .env

## Step 7: Create Frontend Environment File

```bash
cd ../frontend
nano .env.local
```

Add the following content (replace with your EC2 IP):
```env
NEXT_PUBLIC_API_URL=http://3.110.209.28:3001
NEXT_PUBLIC_UPLOAD_URL=http://3.110.209.28p:3001
```

Save and exit (Ctrl+X, then Y, then Enter)

## Step 8: Build Backend

```bash
cd ../backend
npm run build
```

This creates the `dist` folder.

## Step 9: Build Frontend

```bash
cd ../frontend
npm run build
```

This creates the `.next` folder.

## Step 10: Start Applications with PM2

Go back to project root:
```bash
cd ..
```

Start backend:
```bash
cd backend
pm2 start dist/main.js --name movie-backend --env production
cd ..
```

Start frontend:
```bash
cd frontend
pm2 start "npm start" --name movie-frontend
cd ..
```

Or use the ecosystem file:
```bash
pm2 start ecosystem.config.js
```

## Step 11: Save PM2 Configuration

```bash
pm2 save
```

## Step 12: Set PM2 to Start on System Reboot

```bash
pm2 startup
```

This will output a command. Copy and run that command (it will be something like):
```bash
sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u ec2-user --hp /home/ec2-user
```

## Step 13: Check PM2 Status

```bash
pm2 status
pm2 logs
```

## Step 14: Install and Configure Nginx

### Install Nginx

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install nginx -y

# Amazon Linux
sudo yum install nginx -y
```

### Create Nginx Configuration

```bash
# Ubuntu/Debian
sudo nano /etc/nginx/sites-available/movie-website

# Amazon Linux
sudo nano /etc/nginx/conf.d/movie-website.conf
```

Add the following configuration (replace `your-ec2-ip` with your actual EC2 IP):

```nginx
upstream backend {
    server localhost:3001;
}

upstream frontend {
    server localhost:3000;
}

server {
    listen 80;
    server_name your-ec2-ip;

    # Frontend
    location / {
        proxy_pass http://frontend;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Backend API
    location /api {
        proxy_pass http://backend;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Backend uploads
    location /uploads {
        proxy_pass http://backend;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    client_max_body_size 50M;

    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json;
}
```

Save and exit (Ctrl+X, then Y, then Enter)

### Enable Site (Ubuntu/Debian only)

```bash
sudo ln -s /etc/nginx/sites-available/movie-website /etc/nginx/sites-enabled/
```

### Test Nginx Configuration

```bash
sudo nginx -t
```

### Restart Nginx

```bash
sudo systemctl restart nginx
sudo systemctl enable nginx
```

## Step 15: Configure Firewall

```bash
# Check firewall status
sudo ufw status

# Allow HTTP, HTTPS, and Backend port
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw allow 3001/tcp

# Enable firewall
sudo ufw enable

# Check status again
sudo ufw status
```

## Step 16: Configure AWS Security Group

In AWS Console:
1. Go to **EC2** → **Instances**
2. Select your instance
3. Click on **Security** tab
4. Click on the **Security Group** link
5. Click **Edit inbound rules**
6. Add the following rules:
   - **Type**: HTTP, **Port**: 80, **Source**: 0.0.0.0/0
   - **Type**: HTTPS, **Port**: 443, **Source**: 0.0.0.0/0
   - **Type**: Custom TCP, **Port**: 3001, **Source**: 0.0.0.0/0
7. Click **Save rules**

## Step 17: Test Your Deployment

### Check PM2 Status
```bash
pm2 status
pm2 logs
```

### Check Nginx Status
```bash
sudo systemctl status nginx
```

### Test URLs

Replace `your-ec2-ip` with your actual EC2 public IP:

- **Frontend**: `http://your-ec2-ip`
- **Backend API**: `http://your-ec2-ip:3001/api`
- **Swagger Docs**: `http://your-ec2-ip:3001/api`

## Step 18: Verify Everything is Working

```bash
# Check if backend is running
curl http://localhost:3001/api

# Check if frontend is running
curl http://localhost:3000

# Check PM2 processes
pm2 list

# Check port usage
sudo netstat -tulpn | grep :3001
sudo netstat -tulpn | grep :3000
```

## Common Commands Reference

### PM2 Commands

```bash
# View status
pm2 status

# View logs
pm2 logs
pm2 logs movie-backend
pm2 logs movie-frontend

# Restart applications
pm2 restart all
pm2 restart movie-backend
pm2 restart movie-frontend

# Stop applications
pm2 stop all
pm2 stop movie-backend
pm2 stop movie-frontend

# Delete applications
pm2 delete all
pm2 delete movie-backend
pm2 delete movie-frontend

# Save configuration
pm2 save

# View monitoring
pm2 monit
```

### Nginx Commands

```bash
# Test configuration
sudo nginx -t

# Restart nginx
sudo systemctl restart nginx

# Check status
sudo systemctl status nginx

# View logs
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log

# Reload configuration
sudo nginx -s reload
```

### Update Application

```bash
# Navigate to project
cd /var/www/html/NextJS-NestJS-Movie-Website

# Pull latest changes
git pull origin main

# Install dependencies
npm install
cd frontend && npm install && cd ..
cd backend && npm install && cd ..

# Rebuild
cd backend && npm run build && cd ..
cd frontend && npm run build && cd ..

# Restart PM2
pm2 restart all
```

## Troubleshooting

### Backend Not Starting

```bash
# Check logs
pm2 logs movie-backend

# Check if port is in use
sudo lsof -i :3001

# Check environment variables
cat backend/.env

# Try starting manually
cd backend
node dist/main.js
```

### Frontend Not Starting

```bash
# Check logs
pm2 logs movie-frontend

# Check if port is in use
sudo lsof -i :3000

# Check environment variables
cat frontend/.env.local

# Try starting manually
cd frontend
npm start
```

### Nginx Not Working

```bash
# Check nginx status
sudo systemctl status nginx

# Check nginx logs
sudo tail -f /var/log/nginx/error.log

# Test configuration
sudo nginx -t

# Check if nginx is listening on port 80
sudo netstat -tulpn | grep :80
```

### Cannot Access from Browser

1. Check AWS Security Group rules
2. Check firewall: `sudo ufw status`
3. Check if services are running: `pm2 status`
4. Check if ports are open: `sudo netstat -tulpn | grep :3001`

## Production Checklist

- [ ] Node.js 20+ installed
- [ ] PM2 installed and configured
- [ ] All dependencies installed
- [ ] Backend .env file created and configured
- [ ] Frontend .env.local file created and configured
- [ ] Backend built successfully
- [ ] Frontend built successfully
- [ ] PM2 applications started
- [ ] PM2 startup configured
- [ ] Nginx installed and configured
- [ ] Nginx configuration tested
- [ ] Firewall configured
- [ ] AWS Security Group configured
- [ ] Applications accessible via browser
- [ ] SSL certificate installed (optional but recommended)

## Next Steps

1. Test your deployment
2. Set up SSL certificate (optional but recommended)
3. Configure domain name (if you have one)
4. Set up monitoring (optional)
5. Set up backups (optional)

