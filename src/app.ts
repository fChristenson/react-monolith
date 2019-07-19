import express, { Request, Response } from "express";
import path from "path";

export const app = express();

app.use(express.static(path.join(__dirname, "..", "dist")));

app.get("*", (_: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});
