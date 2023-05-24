export interface IAuthRequest {
  usernameOrEmailOrPhone: string;
  password: string;
}

export interface IAuthResponse {
  userId: number;
  token: string;
}
