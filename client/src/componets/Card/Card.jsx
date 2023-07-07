import styles from './Card.module.css'

const Card = (props) => {
  const { name, image, genres } = props;
  return (
    <div className={styles.container}>
      <ul>
        <li>name:{name}</li>
        <li>image:{image}</li>
        <li>genres:{genres}</li>
      </ul>
    </div>
  );
};

export default Card;
