import axios from 'axios';

const CURRENCY_API_BASE_URL = 'https://api.bog.ge/api/v1/rates/currencies';

export const convertToDollars = async (amount, currency = 'GEL') => {
  const response = await axios.get(`${CURRENCY_API_BASE_URL}?from=${currency}&to=USD`);
  const rate = response.data.data.find(r => r.to === 'USD').rate;
  return amount * rate;
};
