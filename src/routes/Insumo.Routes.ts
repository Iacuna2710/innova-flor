import { Router, Request, Response } from "express";
import * as InsumoController from "../controllers/Insumo.Controller";
import path from "path";

const router = Router();

// Servir vistas HTML
router.get("/", (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../views/insumos/index.html"));
});

router.get("/nuevo", (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../views/insumos/form.html"));
});

router.get("/editar/:id", (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../views/insumos/edit.html"));
});

// API JSON
router.get("/api", async (_req: Request, res: Response) => {
  const insumos = await InsumoController.getAll();
  res.json(insumos);
});

router.get("/api/:id", async (req: Request, res: Response) => {
  const insumo = await InsumoController.getById(req.params.id);
  if (!insumo) return res.status(404).json({ mensaje: "Insumo no encontrado" });
  res.json(insumo);
});

router.post("/api", async (req: Request, res: Response) => {
  const nuevo = await InsumoController.create(req.body);
  res.status(201).json(nuevo);
});

router.put("/api/:id", async (req: Request, res: Response) => {
  const ok = await InsumoController.update(req.params.id, req.body);
  if (!ok) return res.status(404).json({ mensaje: "Insumo no encontrado" });
  res.json({ mensaje: "Insumo actualizado" });
});

router.delete("/api/:id", async (req: Request, res: Response) => {
  const ok = await InsumoController.remove(req.params.id);
  if (!ok) return res.status(404).json({ mensaje: "Insumo no encontrado" });
  res.json({ mensaje: "Insumo desactivado" });
});

export default router;
