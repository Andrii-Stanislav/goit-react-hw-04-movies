import React, { Component } from 'react';
import queryString from 'query-string';

import MoviesList from '../../Components/MoviesList';

import { getMovieByQuery } from '../../services/fetchMovie';

import styles from './MoviesPage.module.css';

class MoviesPage extends Component {
  state = {
    query: '',
    movies: null,
  };

  componentDidMount() {
    const queryParams = queryString.parse(this.props.location.search);
    if (queryParams.query) {
      getMovieByQuery(queryParams.query).then(queryMovies =>
        this.setState({ movies: queryMovies }),
      );
    }
  }

  getMovie = event => {
    event.preventDefault();
    getMovieByQuery(this.state.query).then(queryMovies => {
      this.props.history.push({ search: `?query=${this.state.query}` });
      this.setState({ movies: queryMovies, query: '' });
    });
  };

  heandleInput = event => {
    this.setState({ query: event.target.value });
  };

  render() {
    const { movies } = this.state;
    return (
      <div className={styles.card}>
        <form onSubmit={this.getMovie}>
          <input onInput={this.heandleInput} value={this.state.query} />
          <button>Search film</button>
        </form>
        {movies && (
          <MoviesList movies={movies} location={this.props.location} />
        )}
      </div>
    );
  }
}

export default MoviesPage;
