import styles from "./Card.module.css";

const Card = (props) => {
  const { name } = props;
  return (
    <div className={styles.container}>
      <ul>
        <li>name:{name}</li>
      </ul>
    </div>
  );
};

export default Card;

//  <li>imag:{imag}</li>
//<li>genres:{genres}</li>
