import { getInsumosCollection, Insumo } from "../models/Insumo";

// Obtener todos los insumos
export async function getAll(): Promise<Insumo[]> {
  const col = getInsumosCollection();
  return col.find().toArray();
}

// Buscar insumo por _id (string)
export async function getById(id: string): Promise<Insumo | null> {
  const col = getInsumosCollection();
  return col.findOne({ _id: id });
}

// Insertar un nuevo insumo
export async function create(data: Insumo): Promise<Insumo> {
  const col = getInsumosCollection();
  await col.insertOne(data);
  return data;
}

// Actualizar un insumo por _id
export async function update(
  id: string,
  data: Partial<Insumo>
): Promise<boolean> {
  const col = getInsumosCollection();
  const result = await col.updateOne({ _id: id }, { $set: data });
  return result.matchedCount > 0;
}

// Eliminación lógica: poner disponible en false (nunca borrar)
export async function remove(id: string): Promise<boolean> {
  const col = getInsumosCollection();
  const result = await col.updateOne(
    { _id: id },
    { $set: { disponible: false } }
  );
  return result.matchedCount > 0;
}
