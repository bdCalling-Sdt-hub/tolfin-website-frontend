export interface ISubscription {
  _id: string;
  subscriptionName: string;
  subscriptionDuration: number;
  subscriptionStartDate: string;
  subscriptionEndDate: string;
  subscriptionFee: number;
  features: string[];
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}
