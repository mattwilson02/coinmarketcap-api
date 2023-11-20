import { Request, Response } from "express";
import { getCoinMarketCapData } from "../services/coinmarketcap";

export const getLatestCryptoCurrencyListings = async (
  _: Request,
  response: Response
) => {
  try {
    const data = await getCoinMarketCapData("cryptocurrency/listings/latest");
    response.send(data);
  } catch (e) {
    response.send("Error fetching data");
  }
};
