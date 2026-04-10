import { Collection } from "mongodb";
import { getDB } from "../config/db";

export interface Cliente {
  _id?: string;
  cedula: string;
  nombre: string;
  email: string;
  telefono: string;
  direccion: string;
  fecha_registro: Date;
  tipo_cliente: string;
  activo: boolean;
}

export function getClientesCollection(): Collection<Cliente> {
  return getDB().collection<Cliente>("Clientes");
}
