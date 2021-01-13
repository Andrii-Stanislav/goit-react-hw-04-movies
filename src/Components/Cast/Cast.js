import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { imageUrl, getMovieCast } from '../../services/fetchMovie';
import defaultImg from '../../images/defaultImg.png';

class Cast extends Component {
  state = {
    cast: null,
  };

  componentDidMount() {
    getMovieCast(this.props.filmId).then(response =>
      this.setState({ cast: response.slice(0, 20) }),
    );
  }
  render() {
    const { cast } = this.state;
    return (
      <>
        <b>Cast</b>
        <ul>
          {cast &&
            cast.map(actor => (
              <li key={actor.id}>
                {actor.profile_path ? (
                  <img
                    src={imageUrl + actor.profile_path}
                    alt={actor.name}
                    width="100"
                  />
                ) : (
                  <img src={defaultImg} alt={actor.name} width="100" />
                )}
                <p>{actor.name}</p>
                <p>Character: {actor.character}</p>
              </li>
            ))}
        </ul>
      </>
    );
  }
}

Cast.propTypes = {
  filmId: PropTypes.number.isRequired,
};

export default Cast;
