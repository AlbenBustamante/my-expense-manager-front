import { CategoryType } from '../utils/enums';

export interface ICategoryRegister {
  name: string;
  type: CategoryType;
}

export interface ICategoryResponse extends ICategoryRegister {
  id: number;
  isEnabled: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUsersCategoryRequest {
  userId?: number;
  category: ICategoryRegister;
}

export interface IUsersCategoryResponse {
  userId: number;
  category: ICategoryResponse;
  isEnabled: boolean;
  createdAt: Date;
  updatedAt: Date;
}
