export type Role = "super_admin" | "admin" | "user";

export type TUserStatus = "Active" | "Block" | "Delete";

export const UserStatus: TUserStatus[] = ["Active", "Block", "Delete"];

export type TGender = "Male" | "Female";

export const Gender: TGender[] = ["Male", "Female"];
export type IMaritalStatus = "Single" | "Married" | "Widowed" | "Divorced";

export const MaritalStatus: IMaritalStatus[] = [
  "Single",
  "Married",
  "Divorced",
  "Widowed",
];

export type TProfileImage = {
  imageUrl: string;
  file: Record<string, unknown>;
  seeStandardSubscriptionUser: boolean;
  defaultImageUrl: string;
};

export type TPhotoGallery = {
  _id?: string;
  imageUrl: string;
  file: Record<string, unknown>;
};

export type TUser = {
  _id: string;
  fullName: string;
  email: string;
  password: string;
  profileImage?: TProfileImage;
  coverImage?: TProfileImage;
  photoGallery?: TPhotoGallery[];
  status: TUserStatus;
  location?: {
    latitude: number;
    longitude: number;
  };
  gender?: TGender;
  dateOfBirth?: Date;
  age?: number;
  continent?: string;
  country?: string;
  state?: string;
  city?: string;
  address?: string;
  ethnicity?: string;
  denomination?: string;
  education?: string;
  maritalStatus?: IMaritalStatus;
  hobby?: string[];
  occupation?: string;
  interests?: string[];
  aboutMe?: string;
  role: Role;
  isEmailVerified: boolean;
  isOnline: boolean;
  isDeleted: boolean;
  isBlocked: boolean;
  lastPasswordChange: Date;
  isResetPassword: boolean;
  failedLoginAttempts: number;
  lockUntil: Date | undefined;
  haveChildren?: string;
  smoker?: string;
  drinker?: string;
  //subscription related filed
  isSubscribed: boolean;
  currentSubscription?: string | null;
  isStandardSubscription: boolean;
  //
  createdAt: Date;
  updatedAt: Date;
};

export interface IReceiverUser {
  _id: string;
  fullName: string;
  email: string;
  profileImage?: {
    imageUrl: string;
  };
  age: number;
  gender: string;
  aboutMe?: string;
  address?: string;
  city: string;
  country: string;
  state?: string;
  continent?: string;
  ethnicity?: string;
  denomination?: string;
  education?: string;
  maritalStatus?: string;
  hobby?: string[];
  occupation?: string;
  interests?: string[];
  isOnline: boolean;
}
