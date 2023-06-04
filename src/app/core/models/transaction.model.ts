import { TransactionType } from '../utils/enums';

export interface ITransactionRegister {
  userId?: number;
  description: string;
  value: number;
  type: TransactionType;
  categoryName: string;
}

export interface ITransactionResponse {
  id: number;
  userId: number;
  categoryId: number;
  description: string;
  value: string;
  type: TransactionType;
  isEnabled: boolean;
  createdAt: Date;
  updatedAt: Date;
}
