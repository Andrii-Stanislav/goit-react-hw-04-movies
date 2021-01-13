import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import routes from './routes';

import AppBar from './Components/AppBar.js';

const HomePage = lazy(() => import('./views/HomePage'));
const MoviesPage = lazy(() => import('./views/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage'));

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <AppBar />
        <Suspense fallback={<h1>Download...</h1>}>
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <Route
              path={routes.movieDetailsPage}
              component={MovieDetailsPage}
            />
            <Route path={routes.moviesPage} component={MoviesPage} />
            <Redirect to={routes.home} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
