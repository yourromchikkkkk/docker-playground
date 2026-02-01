import express from "express";

const app = express();

const HOST = process.env.HOST || "0.0.0.0";
const PORT = process.env.PORT || 80;

app.get("/", (req, res) =>
  res.json({
    players: ["Ross", "Billy", "John", "Sarah", "Emma", "Sofia", "Alex"],
  }),
);

app.listen(PORT, HOST);

console.log(`RUNNING ON ${HOST}:${PORT}`);
