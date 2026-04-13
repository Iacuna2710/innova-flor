import { Router, Request, Response } from "express";
import * as ClienteController from "../controllers/Cliente.Controller";
import path from "path";

const router = Router();

// Servir vistas HTML
router.get("/", (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../views/clientes/index.html"));
});

router.get("/nuevo", (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../views/clientes/form.html"));
});

router.get("/editar/:id", (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../views/clientes/edit.html"));
});

// API JSON
router.get("/api", async (_req: Request, res: Response) => {
  const clientes = await ClienteController.getAll();
  res.json(clientes);
});

router.get("/api/:id", async (req: Request, res: Response) => {
  const cliente = await ClienteController.getById(req.params.id);
  if (!cliente) return res.status(404).json({ mensaje: "Cliente no encontrado" });
  res.json(cliente);
});

router.post("/api", async (req: Request, res: Response) => {
  const nuevo = await ClienteController.create(req.body);
  res.status(201).json(nuevo);
});

router.put("/api/:id", async (req: Request, res: Response) => {
  const ok = await ClienteController.update(req.params.id, req.body);
  if (!ok) return res.status(404).json({ mensaje: "Cliente no encontrado" });
  res.json({ mensaje: "Cliente actualizado" });
});

router.delete("/api/:id", async (req: Request, res: Response) => {
  const ok = await ClienteController.remove(req.params.id);
  if (!ok) return res.status(404).json({ mensaje: "Cliente no encontrado" });
  res.json({ mensaje: "Cliente desactivado" });
});

export default router;
