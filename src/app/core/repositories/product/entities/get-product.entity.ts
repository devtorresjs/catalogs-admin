export interface GetProductEntity {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  imageUrl: string;
  status: 'Active' | 'Inactive' | string;
}
