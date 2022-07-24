export interface FetchUserDto {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: Date;
  pic: string | null;
}
