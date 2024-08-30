import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../redux/thunks/categoryThunks';
import CategoryCard from '../components/CategoryCard';

function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.list);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="categories">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
}

export default Categories;
