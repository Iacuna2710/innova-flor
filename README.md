# 🌿 Innova Flor — Sistema de Gestión de Vivero

Sistema web para la gestión de inventario, clientes y ventas del vivero **Innova Flor**, desarrollado como proyecto final del curso **SC-609 Bases de Datos NoSQL** en la Universidad Fidélitas.

---

## 📋 Descripción

Innova Flor es un vivero costarricense que vende plantas ornamentales, maceteros y productos para jardinería. Este sistema centraliza la información del negocio mediante una base de datos **MongoDB**, permitiendo gestionar productos, clientes, proveedores y ventas de forma eficiente.

---

## 🛠️ Tecnologías utilizadas

| Capa | Tecnología |
| Backend | Node.js + TypeScript |
| Framework | Express.js |
| Base de datos | MongoDB |
| Frontend | HTML5 + CSS3 + Bootstrap 5 |
| Servidor | localhost:3000 |

---

## 📁 Estructura del proyecto
innova-flor/
├── src/
│   ├── config/
│   │   └── db.ts                  # Conexión a MongoDB
│   ├── models/                    # Interfaces TypeScript + acceso a colecciones
│   │   ├── Planta.ts
│   │   ├── Cliente.ts
│   │   ├── Macetero.ts
│   │   ├── Proveedor.ts
│   │   ├── Insumo.ts
│   │   └── Venta.ts
│   ├── controllers/               # Lógica de negocio (CRUD)
│   │   ├── PlantaController.ts
│   │   ├── ClienteController.ts
│   │   ├── MaceteroController.ts
│   │   ├── ProveedorController.ts
│   │   ├── InsumoController.ts
│   │   └── VentaController.ts
│   ├── routes/                    # Rutas Express
│   │   ├── plantaRoutes.ts
│   │   ├── clienteRoutes.ts
│   │   ├── maceteroRoutes.ts
│   │   ├── proveedorRoutes.ts
│   │   ├── insumoRoutes.ts
│   │   └── ventaRoutes.ts
│   └── app.ts                     # Entry point del servidor
├── views/                         # Vistas HTML
│   ├── index.html
│   ├── layouts/
│   ├── partials/
│   ├── plantas/
│   ├── clientes/
│   ├── maceteros/
│   ├── proveedores/
│   ├── insumos/
│   └── ventas/
├── .env
├── package.json
└── tsconfig.json

---

## 🗄️ Colecciones MongoDB

| Colección | Descripción | Índice |
|---|---|---|
| `Plantas` | Plantas ornamentales del vivero | `nombre_comun` |
| `Clientes` | Clientes registrados | `cedula` (único) |
| `Maceteros` | Maceteros y decoración | `codigo` (único) |
| `Proveedores` | Proveedores del vivero | `nombre` |
| `Insumos` | Tierra, fertilizantes y herramientas | `categoria + disponible` |
| `Ventas` | Registro de transacciones | `cliente_id + fecha` |

---

## ⚙️ Instalación y uso

### Requisitos previos
- Node.js 18+
- MongoDB Community Server corriendo en `localhost:27017`

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/Iacuna2710/innova-flor.git
cd innova-flor

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
# Crear archivo .env con:
MONGODB_URI=mongodb://localhost:27017
DB_NAME=InnovaFlor_DB
PORT=3000

# 4. Iniciar en modo desarrollo
npm run dev
```

El servidor corre en `http://localhost:3000`

---

## 🔗 Endpoints principales

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/plantas` | Listar todas las plantas |
| GET | `/plantas/:id` | Ver detalle de una planta |
| POST | `/plantas` | Crear nueva planta |
| PUT | `/plantas/:id` | Actualizar planta |
| DELETE | `/plantas/:id` | Baja lógica de planta |

> El mismo patrón aplica para `/clientes`, `/maceteros`, `/proveedores`, `/insumos` y `/ventas`

---

**Grupo 6 — SC-609 Bases de Datos NoSQL**  
Universidad Fidélitas — 2026
Isaac Acuña León
Kristhel Rodríguez Villalobos
Sebástien Villalobos Chaves 
Paulina Vargas Jhonson 


## 📄 Licencia

Proyecto Bases de Datos NoSQL — Universidad Fidélitas Costa Rica