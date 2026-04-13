import { Router, Request, Response } from "express";
import * as VentaController from "../controllers/Venta.Controller";
import path from "path";

const router = Router();

// Servir vistas HTML
router.get("/", (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../views/ventas/index.html"));
});

router.get("/nueva", (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../views/ventas/form.html"));
});

router.get("/editar/:id", (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../views/ventas/edit.html"));
});

// API JSON
router.get("/api", async (_req: Request, res: Response) => {
  const ventas = await VentaController.getAll();
  res.json(ventas);
});

router.get("/api/:id", async (req: Request, res: Response) => {
  const venta = await VentaController.getById(req.params.id);
  if (!venta) return res.status(404).json({ mensaje: "Venta no encontrada" });
  res.json(venta);
});

router.post("/api", async (req: Request, res: Response) => {
  const nueva = await VentaController.create(req.body);
  res.status(201).json(nueva);
});

router.put("/api/:id", async (req: Request, res: Response) => {
  const ok = await VentaController.update(req.params.id, req.body);
  if (!ok) return res.status(404).json({ mensaje: "Venta no encontrada" });
  res.json({ mensaje: "Venta actualizada" });
});

router.delete("/api/:id", async (req: Request, res: Response) => {
  const ok = await VentaController.remove(req.params.id);
  if (!ok) return res.status(404).json({ mensaje: "Venta no encontrada" });
  res.json({ mensaje: "Venta anulada" });
});

export default router;
