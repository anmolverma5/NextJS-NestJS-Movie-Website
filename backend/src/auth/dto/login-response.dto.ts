import { ApiProperty } from '@nestjs/swagger';

export class LoginResponseDto {
  @ApiProperty({
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
    description: 'JWT access token for authentication',
  })
  access_token: string;

  @ApiProperty({
    example: { email: 'admin@example.com' },
    description: 'User information',
    type: 'object',
    properties: {
      email: { type: 'string', example: 'admin@example.com' },
    },
  })
  user: {
    email: string;
  };
}

