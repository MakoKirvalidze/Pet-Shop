import axios from 'axios';

const API_BASE_URL = 'https://crudapi.co.uk/api';

export const fetchAnimalsApi = () => axios.get(`${API_BASE_URL}/animals`);
export const fetchAnimalDetailsApi = (id) => axios.get(`${API_BASE_URL}/animals/${id}`);
export const fetchCategoriesApi = () => axios.get(`${API_BASE_URL}/categories`);
