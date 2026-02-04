import express from "express";
import { Pool } from "pg";

const app = express();

const HOST = process.env.HOST || "0.0.0.0";
const PORT = process.env.PORT || 80;

const pool = new Pool({ user: "postgres", host: "db" });

app.get("/", async (req, res) => {
  const data = await pool.query("SELECT * FROM apparel;");
  res.json(data.rows);
});

app.listen(PORT, HOST);

console.log(`RUNNING ON ${HOST}:${PORT}`);
