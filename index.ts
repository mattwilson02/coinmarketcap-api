import express, { Application, Express, Request, Response } from "express";
import { getCoinMarketCapData } from "./services/coinmarketcap";
import dotenv from "dotenv";

const app: Application = express();

dotenv.config();

app.get("/", async (req: Request, res: Response) => {
  try {
    const data = await getCoinMarketCapData("cryptocurrency/map");
    res.send(data);
  } catch (e) {
    res.send("Error fetching data");
  }
});

app.listen(3000, () => console.log("Server open"));
