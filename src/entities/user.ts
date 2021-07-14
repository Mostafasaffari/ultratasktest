export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  jobTitle: string;
  location: string;
  employmentType: string;
  hourlyRate: number;
  picture: string;
}

export interface IColumnUser {
  firstName: string;
  lastName: string;
  jobTitle: string;
  location: string;
  employmentType: string;
  hourlyRate: number;
}
