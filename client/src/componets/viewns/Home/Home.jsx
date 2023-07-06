import React from 'react';
import styles from './Home.module.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h2>Soy el componente Home</h2>
      <Link to='/' className={styles.navLink}>
        <p>BACK</p>
      </Link>
    </div>
  );
};

export default Home;
