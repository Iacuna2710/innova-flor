import { Router, Request, Response } from "express";
import * as PlantaController from "../controllers/Planta.Controller";
import path from "path";

const router = Router();

// Servir vistas HTML
router.get("/", (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../views/plantas/index.html"));
});

router.get("/nueva", (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../views/plantas/form.html"));
});

router.get("/editar/:id", (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../views/plantas/edit.html"));
});

// API JSON
router.get("/api", async (_req: Request, res: Response) => {
  const plantas = await PlantaController.getAll();
  res.json(plantas);
});

router.get("/api/:id", async (req: Request, res: Response) => {
  const planta = await PlantaController.getById(req.params.id);
  if (!planta) return res.status(404).json({ mensaje: "Planta no encontrada" });
  res.json(planta);
});

router.post("/api", async (req: Request, res: Response) => {
  const nueva = await PlantaController.create(req.body);
  res.status(201).json(nueva);
});

router.put("/api/:id", async (req: Request, res: Response) => {
  const ok = await PlantaController.update(req.params.id, req.body);
  if (!ok) return res.status(404).json({ mensaje: "Planta no encontrada" });
  res.json({ mensaje: "Planta actualizada" });
});

router.delete("/api/:id", async (req: Request, res: Response) => {
  const ok = await PlantaController.remove(req.params.id);
  if (!ok) return res.status(404).json({ mensaje: "Planta no encontrada" });
  res.json({ mensaje: "Planta desactivada" });
});

export default router;
