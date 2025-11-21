
export interface CreateProductModel {
  nombre: string;
  descripcion: string;
  precio: number;
  inventario: number;
  imagenUrl: string;
  estatus: 'Active' | 'Inactive' | string;
}
