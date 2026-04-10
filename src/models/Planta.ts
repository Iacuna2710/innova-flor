import { Collection } from "mongodb";
import { getDB } from "../config/db";

export interface Planta {
  _id?: string;
  nombre_comun: string;
  nombre_cientifico: string;
  tipo: string;
  precio: number;
  stock: number;
  descripcion: string;
  disponibilidad: boolean;
}

export function getPlantasCollection(): Collection<Planta> {
  return getDB().collection<Planta>("Plantas");
}
