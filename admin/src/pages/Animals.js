import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnimals } from '../redux/slices/animalSlice';

const Animals = () => {
  const dispatch = useDispatch();
  const animals = useSelector((state) => state.animals.items);
  const loading = useSelector((state) => state.animals.loading);
  const error = useSelector((state) => state.animals.error);

  useEffect(() => {
    dispatch(fetchAnimals());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


  if (!Array.isArray(animals) || animals.length === 0) {
    return <div>No animals found</div>;
  }

  return (
    <div>
      {animals.map((animal) => (
        <div key={animal.id}>
          <h3>{animal.name}</h3>
          <p>{animal.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Animals;
