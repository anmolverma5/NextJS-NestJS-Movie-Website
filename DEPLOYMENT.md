# Deployment Guide

This guide provides detailed instructions for deploying the Movie Database application to AWS.

## Prerequisites

- AWS Account
- AWS CLI installed and configured
- Docker (for containerized deployment)
- Node.js 20+ (for direct deployment)

## Backend Deployment

### Option 1: AWS Elastic Beanstalk (Recommended)

1. **Install EB CLI:**
   ```bash
   pip install awsebcli
   ```

2. **Initialize EB:**
   ```bash
   cd backend
   eb init -p node.js movie-backend
   ```

3. **Create environment:**
   ```bash
   eb create movie-backend-env
   ```

4. **Set environment variables:**
   ```bash
   eb setenv JWT_SECRET=your-secret-key FRONTEND_URL=https://your-frontend-url.com
   ```

5. **Deploy:**
   ```bash
   eb deploy
   ```

### Option 2: AWS ECS with Docker

1. **Build and push Docker image:**
   ```bash
   cd backend
   docker build -t movie-backend .
   docker tag movie-backend:latest <your-ecr-url>/movie-backend:latest
   docker push <your-ecr-url>/movie-backend:latest
   ```

2. **Create ECS Task Definition:**
   - Use the pushed image
   - Set environment variables
   - Configure port mapping (3001)

3. **Create ECS Service:**
   - Use the task definition
   - Configure load balancer
   - Set desired count

### Option 3: EC2 Instance

1. **Launch EC2 instance:**
   - Choose Ubuntu 22.04 LTS
   - Configure security group (port 3001)

2. **SSH into instance:**
   ```bash
   ssh -i your-key.pem ubuntu@your-ec2-ip
   ```

3. **Install Node.js:**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

4. **Clone and setup:**
   ```bash
   git clone <your-repo-url>
   cd "NextJS + NestJS Movie Website/backend"
   npm install
   npm run build
   ```

5. **Install PM2:**
   ```bash
   sudo npm install -g pm2
   ```

6. **Start application:**
   ```bash
   pm2 start dist/main.js --name movie-backend
   pm2 save
   pm2 startup
   ```

7. **Configure Nginx (optional):**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:3001;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## Frontend Deployment

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   cd frontend
   vercel
   ```

3. **Set environment variables:**
   - `NEXT_PUBLIC_API_URL`: Your backend URL

### Option 2: AWS Amplify

1. **Connect repository:**
   - Go to AWS Amplify Console
   - Connect your Git repository

2. **Configure build settings:**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

3. **Set environment variables:**
   - `NEXT_PUBLIC_API_URL`: Your backend URL

### Option 3: S3 + CloudFront

1. **Build for static export:**
   ```bash
   cd frontend
   npm run build
   ```

2. **Export static files:**
   ```bash
   npm run export
   ```

3. **Upload to S3:**
   ```bash
   aws s3 sync out/ s3://your-bucket-name --delete
   ```

4. **Create CloudFront distribution:**
   - Origin: S3 bucket
   - Default root object: index.html
   - Configure caching

5. **Set up custom domain (optional):**
   - Add CNAME record
   - Configure SSL certificate

## Environment Variables

### Backend
- `PORT`: Server port (default: 3001)
- `JWT_SECRET`: Secret key for JWT tokens
- `FRONTEND_URL`: Frontend URL for CORS

### Frontend
- `NEXT_PUBLIC_API_URL`: Backend API URL

## Database Setup (Future)

For production, consider using:
- **PostgreSQL** with RDS
- **MongoDB** with DocumentDB
- **DynamoDB** for serverless

## Monitoring

### CloudWatch
- Set up log groups
- Configure alarms
- Monitor metrics

### Application Monitoring
- Consider using Sentry for error tracking
- Use AWS X-Ray for distributed tracing

## Security Best Practices

1. **Use AWS Secrets Manager** for sensitive data
2. **Enable HTTPS** with SSL certificates
3. **Configure WAF** for API protection
4. **Use IAM roles** instead of access keys
5. **Enable CloudTrail** for audit logs
6. **Regular security updates** for dependencies

## Cost Optimization

1. **Use reserved instances** for predictable workloads
2. **Enable auto-scaling** for variable traffic
3. **Use CloudFront caching** to reduce backend load
4. **Monitor and optimize** resource usage

## Troubleshooting

### Backend Issues
- Check CloudWatch logs
- Verify environment variables
- Test database connectivity
- Check security group rules

### Frontend Issues
- Verify API URL configuration
- Check CORS settings
- Review browser console errors
- Test API endpoints directly

## Support

For deployment issues, refer to:
- AWS Documentation
- Next.js Deployment Guide
- NestJS Deployment Guide

