export interface IFlower {
  _id: string;
  receiverId: {
    _id: string;
    fullName: string;
    profileImage: {
      imageUrl: string;
    };
    age: number;
    address: string;
    aboutMe: string;
    occupation: string;
  };
  senderId: {
    _id: string;
    fullName: string;
    profileImage: {
      imageUrl: string;
    };
    age: number;
    address: string;
    aboutMe: string;
    occupation: string;
  };
  createdAt: Date;
  updatedAt: Date;
}
