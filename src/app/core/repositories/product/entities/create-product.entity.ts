
export interface CreateProductEntity {
  Name: string;
  Description: string;
  Price: number;
  Stock: number;
  ImageUrl: string;
  Status: 'Active' | 'Inactive' | string; // Puedes restringir más si quieres
}
