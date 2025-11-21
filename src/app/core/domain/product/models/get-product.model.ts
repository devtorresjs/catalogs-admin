export interface GetProductModel {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  inventario: number;
  imagenUrl: string;
  estatus: 'Active' | 'Inactive' | string;
}
