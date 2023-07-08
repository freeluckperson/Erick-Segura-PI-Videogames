import styles from "./Card.module.css";

const Card = (props) => {
  const { name, imag, genres } = props;
  return (
    <div className={styles.container}>
      <ul>
        <li>imag:{imag}</li>
        <li>name:{name}</li>
        <li>genres:{genres}</li>
      </ul>
    </div>
  );
};

export default Card;
