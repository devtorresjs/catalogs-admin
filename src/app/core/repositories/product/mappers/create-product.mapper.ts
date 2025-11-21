import { CreateProductModel } from "../../../domain/product/models/create-product.model";
import { CreateProductEntity } from '../entities/create-product.entity';

export function toCreateProductEntity(model: CreateProductModel): CreateProductEntity {
  return {
    Name: model.nombre,
    Description: model.descripcion,
    Price: model.precio,
    Stock: model.inventario,
    ImageUrl: model.imagenUrl,
    Status: model.estatus
  };
}
