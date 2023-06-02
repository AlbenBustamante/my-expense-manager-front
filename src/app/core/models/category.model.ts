export interface ICategoryResponse {
  id: number;
  name: string;
  isEnabled: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUsersCategoryRequest {
  userId?: number;
  categoryName: string;
}

export interface IUsersCategoryResponse {
  userId: number;
  category: ICategoryResponse;
  isEnabled: boolean;
  createdAt: Date;
  updatedAt: Date;
}
