import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAnimalDetails } from '../redux/thunks/animalThunks';

function AnimalDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const animal = useSelector((state) => state.animals.current);

  useEffect(() => {
    dispatch(fetchAnimalDetails(id));
  }, [dispatch, id]);

  if (!animal) return <div>Loading...</div>;

  return (
    <div className="animal-details">
      <img src={animal.image} alt={animal.name} />
      <h1>{animal.name}</h1>
      <p>{animal.description}</p>
      <p>Price: ${animal.price}</p>
      <p>Stock: {animal.stock}</p>
    </div>
  );
}

export default AnimalDetails;
