import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { getGames } from '../../../redux/actions'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'
import { CardsContainer } from '../../index'


const Home = () => {
  const dispatch = useDispatch();
  const {filterVideogames: games, orderVideogames: sortGames} = useSelector(state => state)

  useEffect(() => {
    !sortGames.length && !games.length && dispatch(getGames());
  }, [dispatch, games, sortGames]);

  return (
    <div>
      <CardsContainer games={games}/>
      <Link to='/' className={styles.navLink}>BACK</Link>
    </div>
  );
};

export default Home;
