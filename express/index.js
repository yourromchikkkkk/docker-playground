import express from "express";


const app = express();

const HOST = process.env.HOST || "0.0.0.0";
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Hello world"));

app.listen(PORT, HOST);

console.log(`RUNNING ON ${HOST}:${PORT}`);
