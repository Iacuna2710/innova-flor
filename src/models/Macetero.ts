import { Collection } from "mongodb";
import { getDB } from "../config/db";

export interface Macetero {
  _id?: string;
  codigo: string;
  material: string;
  color: string;
  estilo: string;
  precio: number;
  stock: number;
  personalizable: boolean;
  disponible: boolean;
}

export function getMaceterosCollection(): Collection<Macetero> {
  return getDB().collection<Macetero>("Maceteros");
}
