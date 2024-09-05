import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AnimalCategoryForm from '../components/AnimalCategoryForm';
import { fetchAnimals } from '../redux/slices/animalSlice';
import { fetchCategories } from '../redux/slices/categorySlice';
import { addAnimalToCategory, removeAnimalFromCategory } from '../redux/slices/animalCategorySlice';


const AnimalCategories = () => {
  const dispatch = useDispatch();
  const { data: animals } = useSelector(state => state.animals);
  const { data: categories } = useSelector(state => state.categories); 
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    dispatch(fetchAnimals());
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleAnimalSelect = (animal) => {
    setSelectedAnimal(animal);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleAddToCategory = () => {
    if (selectedAnimal && selectedCategory) {
      dispatch(addAnimalToCategory({ animalId: selectedAnimal.id, categoryId: selectedCategory.id }));
    }
  };

  const handleRemoveFromCategory = () => {
    if (selectedAnimal && selectedCategory) {
      dispatch(removeAnimalFromCategory({ animalId: selectedAnimal.id, categoryId: selectedCategory.id }));
    }
  };

  return (
    <div>
      <h1>Animal Categories</h1>
      <AnimalCategoryForm onSubmit={() => {
        dispatch(fetchAnimals());
        dispatch(fetchCategories());
      }} />
      <div>
        <h2>Animals</h2>
        <ul>
          {animals.map(animal => (
            <li key={animal.id} onClick={() => handleAnimalSelect(animal)}>
              {animal.name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Categories</h2>
        <ul>
          {categories.map(category => (
            <li key={category.id} onClick={() => handleCategorySelect(category)}>
              {category.title}
            </li>
          ))}
        </ul>
      </div>
      {selectedAnimal && selectedCategory && (
        <div>
          <button onClick={handleAddToCategory}>Add Animal to Category</button>
          <table>
            <thead>
              <tr>
                <th>Animal</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{selectedAnimal.name}</td>
                <td>{selectedCategory.title}</td>
                <td>
                  <button onClick={handleRemoveFromCategory}>
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AnimalCategories;
