import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import routes from '../../routes';

const AditionalLink = ({ film, linkTo }) => {
  return (
    <NavLink
      to={{
        pathname: `${routes.moviesPage}/${film.id}/${linkTo.toLowerCase()}`,
      }}
    >
      {linkTo}
    </NavLink>
  );
};

AditionalLink.propTypes = {
  film: PropTypes.object.isRequired,
  linkTo: PropTypes.string.isRequired,
};

export default AditionalLink;
