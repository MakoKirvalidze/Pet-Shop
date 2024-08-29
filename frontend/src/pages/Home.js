import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnimals } from '../redux/thunks/animalThunks';
import AnimalCard from '../components/AnimalCard';

function Home() {
  const dispatch = useDispatch();
  const animals = useSelector((state) => state.animals.list);

  useEffect(() => {
    dispatch(fetchAnimals());
  }, [dispatch]);

  return (
    <div className="home">
      {animals.map((animal) => (
        <AnimalCard key={animal.id} animal={animal} />
      ))}
    </div>
  );
}

export default Home;
