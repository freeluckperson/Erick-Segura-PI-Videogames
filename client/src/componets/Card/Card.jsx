import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { id, name, imag, genres } = props;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Link to={`/detail/${id}`} className={styles.navLink} >
            <h1>{name}</h1>
            <img src={imag} />
            <h6>GENRES: </h6>
            {genres.map(genre => (<span>{genre}</span>))}
        </Link>
      </div>
    </div>
  );
};

export default Card;


