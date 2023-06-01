export interface IAuthRequest {
  usernameOrEmailOrPhone: string;
  password: string;
}

export interface IAuthResponse {
  userId: number;
  token: string;
}

export interface IJwtResponse {
  sub: string;
  id: number;
  email: string;
  phone: string;
  iat: number;
  exp: number;
}
