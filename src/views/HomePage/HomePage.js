import React, { Component } from 'react';

import MoviesList from '../../Components/MoviesList';

import { getTrending } from '../../services/fetchMovie';

import styles from './HomePage.module.css';

class HomePage extends Component {
  state = {
    movies: null,
  };

  componentDidMount() {
    getTrending().then(trendingsMovie =>
      this.setState({ movies: trendingsMovie }),
    );
  }

  render() {
    const { movies } = this.state;
    return (
      <>
        <h1 className={styles.header}>Trending today</h1>
        {movies && (
          <MoviesList movies={movies} location={this.props.location} />
        )}
      </>
    );
  }
}

export default HomePage;
