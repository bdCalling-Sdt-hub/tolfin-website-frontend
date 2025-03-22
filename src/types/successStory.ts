export interface ISuccessStoryCardProps {
    _id: string;
    userId: {
      _id: string;
      fullName: string;
      profileImage: {
        imageUrl: string;
      };
      occupation: string;
    };
    rating: number;
    comment: string;
  }