import { getPlantasCollection, Planta } from "../models/Planta";

// Obtener todas las plantas
export async function getAll(): Promise<Planta[]> {
  const col = getPlantasCollection();
  return col.find().toArray();
}

// Buscar planta por _id (string)
export async function getById(id: string): Promise<Planta | null> {
  const col = getPlantasCollection();
  return col.findOne({ _id: id });
}

// Insertar una nueva planta
export async function create(data: Planta): Promise<Planta> {
  const col = getPlantasCollection();
  await col.insertOne(data);
  return data;
}

// Actualizar una planta por _id
export async function update(
  id: string,
  data: Partial<Planta>
): Promise<boolean> {
  const col = getPlantasCollection();
  const result = await col.updateOne({ _id: id }, { $set: data });
  return result.matchedCount > 0;
}

// Eliminación lógica: poner disponibilidad en false (nunca borrar)
export async function remove(id: string): Promise<boolean> {
  const col = getPlantasCollection();
  const result = await col.updateOne(
    { _id: id },
    { $set: { disponibilidad: false } }
  );
  return result.matchedCount > 0;
}
