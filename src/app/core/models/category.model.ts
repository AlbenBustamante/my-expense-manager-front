export interface CategoryResponse {
  id: number;
  name: string;
  isEnabled: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface UsersCategoryRequest {
  userId?: number;
  categoryName: string;
}

export interface UsersCategoryResponse {
  userId: number;
  category: CategoryResponse;
  isEnabled: boolean;
  createdAt: Date;
  updatedAt: Date;
}
