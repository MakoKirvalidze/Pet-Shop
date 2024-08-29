import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAnimalCategory } from '../redux/slices/animalCategorySlice';
import { createAnimalCategory } from '../services/api';

const AnimalCategoryForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    animal_id: '',
    category_id: '',
  });

  const dispatch = useDispatch();
  const animals = useSelector(state => state.animals);
  const categories = useSelector(state => state.categories);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newAnimalCategory = await createAnimalCategory(formData);
    dispatch(addAnimalCategory(newAnimalCategory));
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <select name="animal_id" value={formData.animal_id} onChange={handleChange} required>
        <option value="">Select Animal</option>
        {animals.map(animal => (
          <option key={animal.id} value={animal.id}>{animal.name}</option>
        ))}
      </select>
      <select name="category_id" value={formData.category_id} onChange={handleChange} required>
        <option value="">Select Category</option>
        {categories.map(category => (
          <option key={category.id} value={category.id}>{category.title}</option>
        ))}
      </select>
      <button type="submit">Add Animal to Category</button>
    </form>
  );
};

export default AnimalCategoryForm