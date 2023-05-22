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
