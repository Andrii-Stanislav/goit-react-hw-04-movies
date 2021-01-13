import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Cast from '../../Components/Cast';
import Reviews from '../../Components/Reviews';
import FilmCard from '../../Components/FilmCard';
import AditionalLink from '../../Components/AditionalLink';

import routes from '../../routes';
import { getMovieById } from '../../services/fetchMovie';

import styles from './MovieDetailsPage.module.css';

class MovieDetailsPage extends Component {
  state = {
    film: null,
    cameFrom: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    getMovieById(movieId).then(searchFilm =>
      this.setState({ film: searchFilm }),
    );
    this.setState({ cameFrom: this.props.location.state });
  }

  handleGoBack = () => {
    const { cameFrom } = this.state;

    if (cameFrom) {
      this.props.history.push(cameFrom.from);
      return;
    }

    this.props.history.push(routes.home);
  };

  render() {
    const { film } = this.state;
    return (
      <div className={styles.card}>
        <button
          className={styles.goBackBtn}
          type="button"
          onClick={this.handleGoBack}
        >
          Go back
        </button>
        {film && (
          <>
            <FilmCard film={film} />

            <p>Aditional information</p>
            <ul>
              <li>
                <AditionalLink film={film} linkTo="Cast" />
              </li>
              <li>
                <AditionalLink film={film} linkTo="Reviews" />
              </li>
            </ul>

            <Switch>
              <Route
                path={routes.cast}
                exact
                render={props => (
                  <Cast {...props} filmId={this.state.film.id} />
                )}
              />
              <Route
                path={routes.reviews}
                exact
                render={props => (
                  <Reviews {...props} filmId={this.state.film.id} />
                )}
              />
            </Switch>
          </>
        )}
      </div>
    );
  }
}

export default MovieDetailsPage;
