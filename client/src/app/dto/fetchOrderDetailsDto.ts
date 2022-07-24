export interface FetchOrderDetailsDto {
  id: number;
  companyName: string;
  companyCountry: string;
  companyCity: string;
  companyAddress: string;
  dateOfRealisation: string;
  createdAt: Date;
  device: {
    device: string;
    status: string;
    model: string;
    fans: number | null;
    filters: number | null;
    coolers: number | null;
    heaters: number | null;
    mufflers: number | null;
    moisturizer: boolean | null;
    recuperator: string | null;
    length: number | null;
    height: number | null;
    width: number | null;
  };
  user: {
    firstName: string;
    lastName: string;
  };
}
