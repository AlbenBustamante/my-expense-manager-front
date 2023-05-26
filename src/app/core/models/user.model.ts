import { Gender } from './enums';

export interface IUserRegister {
  name: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  gender: Gender;
  birthday: string;
  password: string;
}

export interface IUserResponse {
  id: number;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  gender: Gender;
  birthday: Date;
  isEnabled: boolean;
  createdAt: Date;
  updatedAt: Date;
}
