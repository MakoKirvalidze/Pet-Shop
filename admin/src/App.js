import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import Animals from './pages/Animals';
import Categories from './pages/Categories';
import AnimalCategories from './pages/AnimalCategories';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="admin-layout">
          <Header />
          <div className="admin-content">
            <Sidebar />
            <main>
              <Routes>
                <Route path="/animals" element={<Animals />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/animal-categories" element={<AnimalCategories />} />
                <Route path="*" element={<Navigate to="/animals" />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
