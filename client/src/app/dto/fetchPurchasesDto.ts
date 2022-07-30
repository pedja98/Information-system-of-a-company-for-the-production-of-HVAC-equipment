export interface FetchPurchasesDto {
  id: number;
  amount: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  material: {
    itemNumber: string;
    supplierCode: string;
    unit: string;
  };
  head_of_procurement: {
    firstName: string;
    lastName: string;
  };
  stockkeeper: {
    firstName: string;
    lastName: string;
  };
}
