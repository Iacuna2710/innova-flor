import { getVentasCollection, Venta } from "../models/Venta";

// Obtener todas las ventas
export async function getAll(): Promise<Venta[]> {
  const col = getVentasCollection();
  return col.find().toArray();
}

// Buscar venta por _id (string)
export async function getById(id: string): Promise<Venta | null> {
  const col = getVentasCollection();
  return col.findOne({ _id: id });
}

// Insertar una nueva venta
export async function create(data: Venta): Promise<Venta> {
  const col = getVentasCollection();
  await col.insertOne(data);
  return data;
}

// Actualizar una venta por _id
export async function update(
  id: string,
  data: Partial<Venta>
): Promise<boolean> {
  const col = getVentasCollection();
  const result = await col.updateOne({ _id: id }, { $set: data });
  return result.matchedCount > 0;
}

// Eliminación lógica: cambiar estado a "anulada" (nunca borrar)
export async function remove(id: string): Promise<boolean> {
  const col = getVentasCollection();
  const result = await col.updateOne(
    { _id: id },
    { $set: { estado: "anulada" } }
  );
  return result.matchedCount > 0;
}
