import api from '../api';

export interface LoginResponse {
  access_token: string;
  user: {
    email: string;
  };
}

export const authApi = {
  login: async (email: string, password: string): Promise<LoginResponse> => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },
};

