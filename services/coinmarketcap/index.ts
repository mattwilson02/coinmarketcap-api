import axios from "axios";

export const getCoinMarketCapData = async (endpoint: string) => {
  const response = await axios.get(
    `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`,
    {
      headers: {
        "X-CMC_PRO_API_KEY": "3a312a38-5ebe-45bd-8bfb-56f5a0169163",
      },
    }
  );

  if (!response?.data) throw new Error("Error retrieving coin market cap data");

  return response.data;
};
