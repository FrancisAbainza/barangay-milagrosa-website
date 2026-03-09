export interface UserProfile {
  uid: string;
  fullName: string | null;
  email: string | null;
  role: string;
  banned: boolean;
  createdAt: string;
  updatedAt: string;
}
