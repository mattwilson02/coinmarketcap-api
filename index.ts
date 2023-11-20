import express, { Application } from "express";
import { getLatestCryptoCurrencyListings } from "./functions/getLatestCryptocurrencyListings";
import dotenv from "dotenv";

const app: Application = express();

dotenv.config();

app.get("/latest", getLatestCryptoCurrencyListings);

app.listen(3000, () => console.log("Server open"));
