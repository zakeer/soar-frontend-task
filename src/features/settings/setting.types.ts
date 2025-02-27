export interface UserProfile {
  name: string;
  username: string;
  email: string;
  password: string;
  dateOfBirth: string;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
  avatar?: string;
}

export interface ProfileFormData extends UserProfile {
  newPassword?: string;
  confirmPassword?: string;
}
