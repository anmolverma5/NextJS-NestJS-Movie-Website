import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  // In-memory user database (replace with real database in production)
  private readonly users = [
    {
      id: '1',
      email: 'admin@example.com',
      password: '$2a$10$rKz8v5F5Y5V5V5V5V5V5Ve', // password: password123
    },
  ];

  constructor(private jwtService: JwtService) {
    // Hash default password on initialization
    this.initializeDefaultUser();
  }

  private async initializeDefaultUser() {
    const hashedPassword = await bcrypt.hash('password123', 10);
    this.users[0].password = hashedPassword;
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = this.users.find((u) => u.email === email);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const { password: _, ...result } = user;
    return result;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        email: user.email,
      },
    };
  }
}

