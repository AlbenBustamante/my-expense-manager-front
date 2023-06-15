export interface IMainStatsReportResponse {
  totalCategories: number;
  totalTransactions: number;
  totalExpenses: string;
  totalIncomes: string;
}

export interface IReportResponse {
  mainStats: IMainStatsReportResponse;
  currentBalance: string;
}
