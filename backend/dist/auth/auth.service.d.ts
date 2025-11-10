import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private jwtService;
    private readonly users;
    constructor(jwtService: JwtService);
    private initializeDefaultUser;
    validateUser(email: string, password: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
        user: {
            email: any;
        };
    }>;
}
