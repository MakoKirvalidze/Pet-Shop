import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAnimal, updateAnimal } from '../redux/slices/animalSlice';
import { createAnimal, updateAnimal as updateAnimalAPI } from '../services/api';

const AnimalForm = ({ animal, onSubmit }) => {
  const [formData, setFormData] = useState(animal || {
    name: '',
    price: 0,
    description: '',
    isPopular: false,
    stock: 0,
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (animal) {
      const updatedAnimal = await updateAnimalAPI(animal.id, formData);
      dispatch(updateAnimal(updatedAnimal));
    } else {
      const newAnimal = await createAnimal(formData);
      dispatch(addAnimal(newAnimal));
    }
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input name="price" type="number" value={formData.price} onChange={handleChange} placeholder="Price" required />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
      <label>
        <input name="isPopular" type="checkbox" checked={formData.isPopular} onChange={handleChange} />
        Popular
      </label>
      <input name="stock" type="number" value={formData.stock} onChange={handleChange} placeholder="Stock" required />
      <button type="submit">{animal ? 'Update' : 'Create'} Animal</button>
    </form>
  );
};

export default AnimalForm;
