import { getClientesCollection, Cliente } from "../models/Cliente";

// Obtener todos los clientes
export async function getAll(): Promise<Cliente[]> {
  const col = getClientesCollection();
  return col.find().toArray();
}

// Buscar cliente por _id (string)
export async function getById(id: string): Promise<Cliente | null> {
  const col = getClientesCollection();
  return col.findOne({ _id: id });
}

// Insertar un nuevo cliente
export async function create(data: Cliente): Promise<Cliente> {
  const col = getClientesCollection();
  await col.insertOne(data);
  return data;
}

// Actualizar un cliente por _id
export async function update(
  id: string,
  data: Partial<Cliente>
): Promise<boolean> {
  const col = getClientesCollection();
  const result = await col.updateOne({ _id: id }, { $set: data });
  return result.matchedCount > 0;
}

// Eliminación lógica: marcar activo como false (nunca borrar)
export async function remove(id: string): Promise<boolean> {
  const col = getClientesCollection();
  const result = await col.updateOne(
    { _id: id },
    { $set: { activo: false } }
  );
  return result.matchedCount > 0;
}
