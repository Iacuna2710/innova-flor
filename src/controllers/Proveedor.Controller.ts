import { getProveedoresCollection, Proveedor } from "../models/Proveedor";

// Obtener todos los proveedores
export async function getAll(): Promise<Proveedor[]> {
  const col = getProveedoresCollection();
  return col.find().toArray();
}

// Buscar proveedor por _id (string)
export async function getById(id: string): Promise<Proveedor | null> {
  const col = getProveedoresCollection();
  return col.findOne({ _id: id });
}

// Insertar un nuevo proveedor
export async function create(data: Proveedor): Promise<Proveedor> {
  const col = getProveedoresCollection();
  await col.insertOne(data);
  return data;
}

// Actualizar un proveedor por _id
export async function update(
  id: string,
  data: Partial<Proveedor>
): Promise<boolean> {
  const col = getProveedoresCollection();
  const result = await col.updateOne({ _id: id }, { $set: data });
  return result.matchedCount > 0;
}

// Eliminación lógica: poner activo en false (nunca borrar)
export async function remove(id: string): Promise<boolean> {
  const col = getProveedoresCollection();
  const result = await col.updateOne(
    { _id: id },
    { $set: { activo: false } }
  );
  return result.matchedCount > 0;
}
