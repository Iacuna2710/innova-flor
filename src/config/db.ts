import { MongoClient,  Db } from "mongodb";
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
const dbName = process.env.DB_NAME || "InnovaFlor_DB";

const client = new MongoClient(uri);
let db: Db;

export async function connectDB() {
    try {
        await client.connect();
        db = client.db(dbName);
        console.log("Conectado a MongoDB");
    } catch (error) {
        console.error("Error al conectar a MongoDB:", error);
        process.exit(1);
    }
}

export function getDB() {
    if (!db) {
        throw new Error("La base de datos no está conectada");
    }
    return db;
}