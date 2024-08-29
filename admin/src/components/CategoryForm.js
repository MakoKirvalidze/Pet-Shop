import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategory, updateCategory } from '../redux/slices/categorySlice';
import { createCategory, updateCategory as updateCategoryAPI } from '../services/api';

const CategoryForm = ({ category, onSubmit }) => {
  const [formData, setFormData] = useState(category || {
    title: '',
    description: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (category) {
      const updatedCategory = await updateCategoryAPI(category.id, formData);
      dispatch(updateCategory(updatedCategory));
    } else {
      const newCategory = await createCategory(formData);
      dispatch(addCategory(newCategory));
    }
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
      <button type="submit">{category ? 'Update' : 'Create'} Category</button>
    </form>
  );
};


export default CategoryForm