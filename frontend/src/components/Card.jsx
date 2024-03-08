import styles from "./Card.module.css";
import icon from "../assets/calories-icon.svg";

function Card() {
  return (
    <div className={styles.card}>
      <div>
        <img src={icon} alt="calories" />
      </div>
      <div className={styles.cardData}>
        <h2>1990 XX </h2>
        <p>Calories</p>
      </div>
    </div>
  );
}

export default Card;
