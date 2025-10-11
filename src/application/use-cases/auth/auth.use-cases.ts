import { LoginResponseSuccess } from '../../../domain/entitis/auth/login/login.response-success';
import { ErrorResponse } from '../../../domain/entitis/response-error';
import { AuthRepository } from '../../../domain/repository/auth.repository';

export class AuthUseCases {
  constructor(private readonly authRepository: AuthRepository) {}

  async login(
    username: string,
    password: string,
  ): Promise<LoginResponseSuccess | ErrorResponse> {
    return this.authRepository.login(username, password);
  }
}
