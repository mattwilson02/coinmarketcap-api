import express, { Application, Express, Request, Response } from "express";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {});

app.listen(3000, () => console.log("Server open"));
