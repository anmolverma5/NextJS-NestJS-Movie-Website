# Quick Setup Commands - Copy & Paste

## Essential Commands (Run in Order)

### 1. Navigate to Project
```bash
cd /var/www/html/NextJS-NestJS-Movie-Website
```

### 2. Install Dependencies
```bash
npm install
cd frontend && npm install && cd ..
cd backend && npm install && cd ..
```

### 3. Create Directories
```bash
mkdir -p backend/uploads logs
chmod 755 backend/uploads
```

### 4. Create Backend .env
```bash
cd backend
nano .env
```
Paste this (replace `your-ec2-ip` with your actual IP):
```env
PORT=3001
NODE_ENV=production
FRONTEND_URL=http://your-ec2-ip
JWT_SECRET=$(openssl rand -base64 32)
CORS_ORIGIN=http://your-ec2-ip
```
Save: Ctrl+X, Y, Enter

### 5. Generate JWT Secret
```bash
openssl rand -base64 32
```
Copy the output and update JWT_SECRET in .env

### 6. Create Frontend .env.local
```bash
cd ../frontend
nano .env.local
```
Paste this (replace `your-ec2-ip` with your actual IP):
```env
NEXT_PUBLIC_API_URL=http://your-ec2-ip:3001
NEXT_PUBLIC_UPLOAD_URL=http://your-ec2-ip:3001
```
Save: Ctrl+X, Y, Enter

### 7. Build Applications
```bash
cd ../backend && npm run build && cd ..
cd frontend && npm run build && cd ..
```

### 8. Start with PM2
```bash
cd backend
pm2 start dist/main.js --name movie-backend
cd ../frontend
pm2 start "npm start" --name movie-frontend
cd ..
pm2 save
```

### 9. Set PM2 Startup
```bash
pm2 startup
# Copy and run the command it outputs
```

### 10. Install Nginx
```bash
# Ubuntu/Debian
sudo apt update && sudo apt install nginx -y

# Amazon Linux
sudo yum install nginx -y
```

### 11. Create Nginx Config
```bash
# Ubuntu/Debian
sudo nano /etc/nginx/sites-available/movie-website

# Amazon Linux
sudo nano /etc/nginx/conf.d/movie-website.conf
```

Paste this (replace `your-ec2-ip` with your actual IP):
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

    location / {
        proxy_pass http://frontend;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location /api {
        proxy_pass http://backend;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location /uploads {
        proxy_pass http://backend;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    client_max_body_size 50M;
}
```

Save: Ctrl+X, Y, Enter

### 12. Enable Site (Ubuntu/Debian only)
```bash
sudo ln -s /etc/nginx/sites-available/movie-website /etc/nginx/sites-enabled/
```

### 13. Test and Restart Nginx
```bash
sudo nginx -t
sudo systemctl restart nginx
sudo systemctl enable nginx
```

### 14. Configure Firewall
```bash
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw allow 3001/tcp
sudo ufw enable
```

### 15. Check Status
```bash
pm2 status
sudo systemctl status nginx
```

## Quick Check Commands

```bash
# Check PM2
pm2 status
pm2 logs

# Check Nginx
sudo systemctl status nginx
sudo nginx -t

# Check ports
sudo netstat -tulpn | grep :3001
sudo netstat -tulpn | grep :3000

# Test locally
curl http://localhost:3001/api
curl http://localhost:3000
```

## Restart Commands

```bash
# Restart PM2
pm2 restart all

# Restart Nginx
sudo systemctl restart nginx

# Rebuild and restart
cd /var/www/html/NextJS-NestJS-Movie-Website
cd backend && npm run build && cd ..
cd frontend && npm run build && cd ..
pm2 restart all
```

