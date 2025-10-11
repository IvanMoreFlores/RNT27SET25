import { LoginResponseSuccess } from '../domain/entitis/auth/login/login.response-success';
import { ErrorResponse } from '../domain/entitis/response-error';
import { api } from '../application/services/api';
import { AxiosError } from 'axios';
import { AuthRepository } from '../domain/repository/auth.repository';

export class AuthInfrastructure implements AuthRepository {
  async login(
    username: string,
    password: string,
  ): Promise<LoginResponseSuccess | ErrorResponse> {
    try {
      const response = await api.post('/auth/login', { username, password });
      return {
        status: response.status,
        response: response.data,
      };
    } catch (error) {
      if (error instanceof AxiosError) {
        const status = error.response?.status || 500;
        const errorData: { message: string } =
          typeof error.response?.data === 'object' &&
          'message' in error.response?.data
            ? error.response.data
            : { message: 'Unknown error' };

        return { error: errorData, status };
      }
      return {
        error: { message: 'An unexpected error occurred' },
        status: 500,
      };
    }
  }
}
