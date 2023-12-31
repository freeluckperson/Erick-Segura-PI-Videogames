import React, { useState } from 'react';
import styles from './CardsContainer.module.css';
import { Card } from '../';
import { useDispatch } from 'react-redux';
import { alphabetically, filterByGenres, filterByOrigin, orderByRating } from '../../redux/actions';
import { SearchBar } from '../index';

const CardsContainer = ({ games }) => {
  const st = { width: '80px', marginBottom: '5em', marginRight: '1em' };
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [elementsPerPage, setElementsPerPage] = useState(15);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const indexOfLastElement = currentPage * elementsPerPage;
  const indexOfFirstElement = indexOfLastElement - elementsPerPage;
  const currentElements = games.slice(indexOfFirstElement, indexOfLastElement);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(games.length / elementsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlerFilter = (e) => {
    dispatch(filterByGenres([e.target.value]));
  };

  const handlerOrigin = (e) => {
    dispatch(filterByOrigin(e.target.value));
    setCurrentPage(1)
  };

const handlerOrder = (e) => {
    dispatch(orderByRating(e.target.value));
  };

  const handlerAlpha = (e) => {
    dispatch(alphabetically(e.target.value));
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <div className={styles.filtros}>
        <span>GENRES</span>
        <select onChange={handlerFilter} style={st}>
        <option value="Action">Action</option>
           <option value="Action">Action</option>
           <option value="Indie">Indie</option>
           <option value="Adventure">Adventure</option>
           <option value="RPG">RPG</option>
           <option value="Shooter">Shooter</option>
           <option value="Platformer">Platformer</option>
           <option value="Massively Multiplayer">Massively Multiplayer</option>
           <option value="Racing">Racing</option>
           <option value="Fighting">Fighting</option>
           <option value="Family">Family</option>
           <option value="Board Games">Board Games</option>
           <option value="Strategy">Strategy</option>
           <option value="Educational">Educational</option>
           <option value="Sports">Sports</option>
           <option value="Arcade">Arcade</option>
           <option value="Simulation">Simulation</option>
           <option value="Casual">Casual</option>
           <option value="Card">Card</option>
        </select>

        <span>ORIGIN</span>
        <select onChange={handlerOrigin} style={st}>
           <option value='YES'>DB</option>
           <option value='NO'>API</option>
           <option value='ALL'>ALL</option>
        </select>

        <span>RATING</span>
        <select onChange={handlerOrder} style={st}>
           <option value='Mayor'>Mayor</option>
           <option value='Minor'>Minor</option>
        </select>

        <span>A - Z</span>
        <select onChange={handlerAlpha} style={st}>
           <option value='A'>A</option>
           <option value='Z'>Z</option>
        </select>
      </div>

      <div style={{ marginTop: '1em' }}>
        <SearchBar setCurrentPage={setCurrentPage} />
      </div>

      <div className={styles.container}>
        {currentElements.length === 0 && <h1>Buscando juegos, por favor espera...</h1>}
        {currentElements.map(({ id, name, imag, genres }) => (
          <Card name={name} imag={imag} genres={genres} id={id} key={id} />
        ))}
      </div>

      <div className={styles.buttonContainer}>
        <button type='button' onClick={handlePrevClick} className={styles.button} disabled={currentPage === 1}>
          Prev
        </button>

        {pageNumbers.map((number) => (
          <button
            type='button'
            key={number}
            onClick={() => paginate(number)}
            className={`${styles.button} ${currentPage === number ? styles.active : ''}`}
            style={{ backgroundColor: currentPage === number ? 'transparent' : '' }}
          >
            {number}
          </button>
        ))}

        <button
          type='button'
          onClick={handleNextClick}
          className={styles.button}
          disabled={currentPage === pageNumbers.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CardsContainer;


