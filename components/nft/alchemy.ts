export const getNFTs = async (owner: string, contract: string) => {
  const alchemyURL = process.env.alchemy_url
  const url = `${alchemyURL}/getNFTs?owner=${owner}&contractAddresses[]=${contract}&withMetadata=true&pageSize=100`;

  const response = await fetch(url);
  const data = await response.json();

  return data.ownedNfts;
};
