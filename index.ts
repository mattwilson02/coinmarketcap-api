import express, { Application, Express, Request, Response } from "express";
import { getCoinMarketCapData } from "./services/coinmarketcap";

const app: Application = express();

app.get("/", async (req: Request, res: Response) => {
  try {
    const data = await getCoinMarketCapData("cryptocurrency/listings/latest");
    res.send(data.data);
  } catch (e) {
    res.send("Error fetching data");
  }
});

app.listen(3000, () => console.log("Server open"));
