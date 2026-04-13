import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db";

import plantaRoutes from "./routes/Planta.Routes";
import clienteRoutes from "./routes/Cliente.Routes";
import maceteroRoutes from "./routes/Macetero.Routes";
import proveedorRoutes from "./routes/Proveedor.Routes";
import insumoRoutes from "./routes/Insumo.Routes";
import ventaRoutes from "./routes/Venta.Routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Página de inicio
app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

// Rutas
app.use("/plantas", plantaRoutes);
app.use("/clientes", clienteRoutes);
app.use("/maceteros", maceteroRoutes);
app.use("/proveedores", proveedorRoutes);
app.use("/insumos", insumoRoutes);
app.use("/ventas", ventaRoutes);

// Iniciar servidor
async function main() {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`🌿 Servidor corriendo en http://localhost:${PORT}`);
  });
}

main();
