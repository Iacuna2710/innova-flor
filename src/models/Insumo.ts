import { Collection } from "mongodb";
import { getDB } from "../config/db";

export interface Insumo {
  _id?: string;
  nombre: string;
  categoria: string;
  marca: string;
  presentacion: string;
  precio: number;
  stock: number;
  proveedor_id: string;
  disponible: boolean;
}

export function getInsumosCollection(): Collection<Insumo> {
  return getDB().collection<Insumo>("Insumos");
}
