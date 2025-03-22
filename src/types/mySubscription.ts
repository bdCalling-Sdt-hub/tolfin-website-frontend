export interface IMySubscription {
  _id: string;
  userId: string;
  subscriptionId: {
    subscriptionName: string;
    subscriptionDuration: number;
    subscriptionFee: number;
    subscriptionEndDate: Date;
  };
  subscriptionExpiryDate: Date;
  createdAt: string;
  updatedAt: string;
}
