import { Collection } from "mongodb";
import { getDB } from "../config/db";

export interface Proveedor {
  _id?: string;
  nombre: string;
  telefono: string;
  email: string;
  condiciones_pago: number;
  activo: boolean;
}

export function getProveedoresCollection(): Collection<Proveedor> {
  return getDB().collection<Proveedor>("Proveedores");
}
