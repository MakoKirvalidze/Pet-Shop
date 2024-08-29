import React from 'react';
import { Link } from 'react-router-dom';

function CategoryCard({ category }) {
  return (
    <div className="category-card">
      <Link to={`/categories/${category.id}`}>
        <h2>{category.title}</h2>
        <p>{category.description}</p>
      </Link>
    </div>
  );
}

export default CategoryCard;
