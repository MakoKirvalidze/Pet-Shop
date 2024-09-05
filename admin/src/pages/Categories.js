import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoryForm from '../components/CategoryForm';
import { fetchCategories, updateCategory, deleteCategory } from '../redux/slices/categorySlice';
import { useEffect } from 'react';

const Categories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleUpdate = (category) => {
    dispatch(updateCategory(category));
  };

  const handleDelete = (id) => {
    dispatch(deleteCategory(id));
  };

  return (
    <div>
      <h1>Categories</h1>
      <CategoryForm />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(category => (
            <tr key={category.id}>
              <td>{category.title}</td>
              <td>{category.description}</td>
              <td>
                <button onClick={() => handleUpdate(category)}>Update</button>
                <button onClick={() => handleDelete(category.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Categories;