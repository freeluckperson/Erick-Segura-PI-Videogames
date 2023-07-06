import React from 'react';
import styles from './LandingPage.module.css';
import {Link} from 'react-router-dom'

const st = {fontSize: '3em'};

const LandingPage = () => {
  return (
    <div>
      <Link to='/home' className={styles.navLink}>
        <p style={st} >To Home</p>
      </Link>
    </div>
  );
};

export default LandingPage;
