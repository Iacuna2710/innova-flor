import { Router, Request, Response } from "express";
import * as ProveedorController from "../controllers/Proveedor.Controller";
import path from "path";

const router = Router();

// Servir vistas HTML
router.get("/", (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../views/proveedores/index.html"));
});

router.get("/nuevo", (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../views/proveedores/form.html"));
});

router.get("/editar/:id", (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../views/proveedores/edit.html"));
});

// API JSON
router.get("/api", async (_req: Request, res: Response) => {
  const proveedores = await ProveedorController.getAll();
  res.json(proveedores);
});

router.get("/api/:id", async (req: Request, res: Response) => {
  const proveedor = await ProveedorController.getById(req.params.id);
  if (!proveedor) return res.status(404).json({ mensaje: "Proveedor no encontrado" });
  res.json(proveedor);
});

router.post("/api", async (req: Request, res: Response) => {
  const nuevo = await ProveedorController.create(req.body);
  res.status(201).json(nuevo);
});

router.put("/api/:id", async (req: Request, res: Response) => {
  const ok = await ProveedorController.update(req.params.id, req.body);
  if (!ok) return res.status(404).json({ mensaje: "Proveedor no encontrado" });
  res.json({ mensaje: "Proveedor actualizado" });
});

router.delete("/api/:id", async (req: Request, res: Response) => {
  const ok = await ProveedorController.remove(req.params.id);
  if (!ok) return res.status(404).json({ mensaje: "Proveedor no encontrado" });
  res.json({ mensaje: "Proveedor desactivado" });
});

export default router;
