import axios from 'axios';

const API_BASE_URL = 'https://crudapi.co.uk/api/v1';
const API_KEY = 'ab6sm2yByeIjF4xQw_Xw_jDuBhO8_g-RjnmwTnzTCo0AVgL1Ew'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`,
  },
});

export const fetchAnimals = () => api.get('/animals');
export const createAnimal = (animalData) => api.post('/animals', animalData);
export const updateAnimal = (id, animalData) => api.put(`/animals/${id}`, animalData);
export const deleteAnimal = (id) => api.delete(`/animals/${id}`);

export const fetchCategories = () => api.get('/categories');
export const createCategory = (categoryData) => api.post('/categories', categoryData);
export const updateCategory = (id, categoryData) => api.put(`/categories/${id}`, categoryData);
export const deleteCategory = (id) => api.delete(`/categories/${id}`);

export const fetchAnimalCategories = () => api.get('/animals_with_categories');
export const createAnimalCategory = (data) => api.post('/animals_with_categories', data);
export const deleteAnimalCategory = (id) => api.delete(`/animals_with_categories/${id}`);

export default api;
