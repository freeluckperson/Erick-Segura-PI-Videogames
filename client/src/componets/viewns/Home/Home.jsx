import React from 'react';
import styles from './Home.module.css'
import { Link } from 'react-router-dom'
import { CardsContainer } from '../..';

const Home = () => {
  return (
    <div>
      <h2>Soy el componente Home</h2>
      <CardsContainer />
      <Link to='/' className={styles.navLink}>BACK</Link>
    </div>
  );
};

export default Home;
