import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BooksPage from './BooksPage';
import BookDetailsPage from './bookDetailsPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/books/:id">
          <BookDetailsPage />
        </Route>
        <Route path="/books">
          <BooksPage />
        </Route>
        <Route path="/">
          <BooksPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
