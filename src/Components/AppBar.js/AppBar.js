import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './AppBar.module.css';

import routes from '../../routes';

const AppBarr = () => {
  return (
    <ul className={styles.nav}>
      <li className={styles.item}>
        <NavLink
          to={routes.home}
          className={styles.link}
          exact
          activeClassName={styles.activeLink}
        >
          Home
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink
          to={routes.moviesPage}
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default AppBarr;
