import { Router, Request, Response } from "express";
import * as MaceteroController from "../controllers/Macetero.Controller";
import path from "path";

const router = Router();

// Servir vistas HTML
router.get("/", (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../views/maceteros/index.html"));
});

router.get("/nuevo", (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../views/maceteros/form.html"));
});

router.get("/editar/:id", (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../views/maceteros/edit.html"));
});

// API JSON
router.get("/api", async (_req: Request, res: Response) => {
  const maceteros = await MaceteroController.getAll();
  res.json(maceteros);
});

router.get("/api/:id", async (req: Request, res: Response) => {
  const macetero = await MaceteroController.getById(req.params.id);
  if (!macetero) return res.status(404).json({ mensaje: "Macetero no encontrado" });
  res.json(macetero);
});

router.post("/api", async (req: Request, res: Response) => {
  const nuevo = await MaceteroController.create(req.body);
  res.status(201).json(nuevo);
});

router.put("/api/:id", async (req: Request, res: Response) => {
  const ok = await MaceteroController.update(req.params.id, req.body);
  if (!ok) return res.status(404).json({ mensaje: "Macetero no encontrado" });
  res.json({ mensaje: "Macetero actualizado" });
});

router.delete("/api/:id", async (req: Request, res: Response) => {
  const ok = await MaceteroController.remove(req.params.id);
  if (!ok) return res.status(404).json({ mensaje: "Macetero no encontrado" });
  res.json({ mensaje: "Macetero desactivado" });
});

export default router;
