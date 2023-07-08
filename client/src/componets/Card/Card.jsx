import styles from "./Card.module.css";

const Card = (props) => {
  const { name, imag, genres } = props;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src={imag} />
        <h4>{name}</h4>
        {genres.map(genre => ( <span>{genre}</span> ))}
      </div>
    </div>
  );
};

export default Card;
