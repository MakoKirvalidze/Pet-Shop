import React from 'react';

const Header = () => {
  return (
    <header className="admin-header">
      <div className="logo">
        <h1>Pet Shop Admin</h1>
      </div>
      <nav className="admin-nav">
        <ul>
          <li><a href="/animals">Animals</a></li>
          <li><a href="/categories">Categories</a></li>
          <li><a href="/animal-categories">Animal Categories</a></li>
          <li><a href="/logout">Logout</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
