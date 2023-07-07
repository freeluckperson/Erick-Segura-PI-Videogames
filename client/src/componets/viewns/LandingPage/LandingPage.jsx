import React from 'react';
import styles from './LandingPage.module.css';
import {Link} from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
      <Link to='/home' className={styles.navLink}>
        To Home
      </Link>
    </div>
  );
};

export default LandingPage;
