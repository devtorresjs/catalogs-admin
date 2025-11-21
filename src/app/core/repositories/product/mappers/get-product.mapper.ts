import { GetProductModel } from "../../../domain/product/models/get-product.model";
import { GetProductEntity } from "../entities/get-product.entity";

export function toGetProductModel(entity: GetProductEntity): GetProductModel{
  return {
    id:  entity.id,
    nombre: entity.name,
    descripcion: entity.description,
    precio: entity.price,
    inventario: entity.stock,
    imagenUrl: entity.imageUrl,
    estatus: entity.status
  };
}
