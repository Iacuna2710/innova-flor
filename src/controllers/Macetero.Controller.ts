import { getMaceterosCollection, Macetero } from "../models/Macetero";

// Obtener todos los maceteros
export async function getAll(): Promise<Macetero[]> {
  const col = getMaceterosCollection();
  return col.find().toArray();
}

// Buscar macetero por _id (string)
export async function getById(id: string): Promise<Macetero | null> {
  const col = getMaceterosCollection();
  return col.findOne({ _id: id });
}

// Insertar un nuevo macetero
export async function create(data: Macetero): Promise<Macetero> {
  const col = getMaceterosCollection();
  await col.insertOne(data);
  return data;
}

// Actualizar un macetero por _id
export async function update(
  id: string,
  data: Partial<Macetero>
): Promise<boolean> {
  const col = getMaceterosCollection();
  const result = await col.updateOne({ _id: id }, { $set: data });
  return result.matchedCount > 0;
}

// Eliminación lógica: poner disponible en false (nunca borrar)
export async function remove(id: string): Promise<boolean> {
  const col = getMaceterosCollection();
  const result = await col.updateOne(
    { _id: id },
    { $set: { disponible: false } }
  );
  return result.matchedCount > 0;
}
