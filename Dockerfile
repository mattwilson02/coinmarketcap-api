FROM node:16

ENV COIN_MARKET_CAP_BASE_URL=https://pro-api.coinmarketcap.com

# TODO: extract the secret
ENV COIN_MARKET_CAP_API_KEY=3a312a38-5ebe-45bd-8bfb-56f5a0169163

WORKDIR /app

COPY . .

RUN yarn

EXPOSE 3000

CMD ["yarn", "dev"]