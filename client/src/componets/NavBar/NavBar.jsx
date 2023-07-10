import React from 'react'
import {Link} from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <div className={styles.mainCotainer}>
      <Link to='/home' className={styles.navLink}>HOME</Link>
      <Link to='/create' className={styles.navLink}>CREATE</Link>
      <Link to='/detail' className={styles.navLink}>DETAIL</Link>
      <div >
      <input type="text" />
      <button></button>
      </div>
    </div>
  );
};

export default NavBar;
