import styles from "./Card.module.css";

function Card() {
  return (
    <div className={styles.card}>
      <div>
        <img src="src\assets\calories-icon.svg" alt="calories" />
      </div>
      <div className={styles.cardData}>
        <h2>1990 XX </h2>
        <p>Calories</p>
      </div>
    </div>
  );
}

export default Card;
