import { LoginResponseSuccess } from '../entitis/auth/login/login.response-success';
import { ErrorResponse } from '../entitis/response-error';

export interface AuthRepository {
  login(
    username: string,
    password: string,
  ): Promise<LoginResponseSuccess | ErrorResponse>;
}
