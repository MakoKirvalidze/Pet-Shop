import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';


import Animals from './pages/Animals';
import Categories from './pages/Categories';
import AnimalCategories from './pages/AnimalCategories';
// import Header from './components/Header';
// import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="admin-layout">
          <Header />
          <div className="admin-content">
            <Sidebar />
            <main>
              <Switch>
                <Route path="/animals" component={Animals} />
                <Route path="/categories" component={Categories} />
                <Route path="/animal-categories" component={AnimalCategories} />
                <Redirect from="/" to="/animals" />
              </Switch>
            </main>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;