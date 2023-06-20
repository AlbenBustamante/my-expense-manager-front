import { ICategoryRegister } from './category.model';

export interface ITransactionRegister {
  userId?: number;
  category: ICategoryRegister;
  description: string;
  value: number;
}

export interface ITransactionResponse {
  id: number;
  userId: number;
  categoryId: number;
  description: string;
  value: string;
  isEnabled: boolean;
  createdAt: Date;
  updatedAt: Date;
}
