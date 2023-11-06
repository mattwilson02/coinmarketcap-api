import axios from "axios";

export const getCoinMarketCapData = async (endpoint: string) => {
  const baseUrl = process.env.COIN_MARKET_CAP_BASE_URL;
  const apiKey = process.env.COIN_MARKET_CAP_API_KEY;

  const response = await axios.get(`${baseUrl}/v1/${endpoint}`, {
    headers: {
      "X-CMC_PRO_API_KEY": apiKey,
    },
  });

  if (response.status >= 400)
    throw new Error("Error retrieving coin market cap data");

  return response.data;
};
