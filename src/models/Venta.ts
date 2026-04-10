import { Collection } from "mongodb";
import { getDB } from "../config/db";

export interface Venta {
  _id?: string;
  numero_factura: string;
  fecha: Date;
  cliente_id: string;
  empleado: string;
  tipo_producto: string;
  producto_id: string;
  nombre_producto: string;
  cantidad: number;
  precio_unitario: number;
  total: number;
  metodo_pago: string;
  estado: string;
}

export function getVentasCollection(): Collection<Venta> {
  return getDB().collection<Venta>("Ventas");
}
