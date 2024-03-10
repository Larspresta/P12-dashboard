import PropTypes from "prop-types";
import styles from "./Card.module.css";
import iconCalories from "../assets/calories-icon.svg";
import iconCarbs from "../assets/carbs-icon.svg";
import iconProteins from "../assets/protein-icon.svg";
import iconLipids from "../assets/fat-icon.svg";

import { useEffect, useState } from "react";
import { GetUserMainInfo } from "../../apiService.js";

/**
 * styled card component to display user's nutritional data and corresponding icon
 *
 * @param {object} props
 * @param {number} props.userId ID to get user nutrition data
 * @param {string} props.keyDataType nutrition data type e.g 'calorieCount'
 * @returns {React.ReactElement} Card component to display user specific nutrition data
 */

function Card({ userId, keyDataType }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    GetUserMainInfo(userId)
      .then((userData) => {
        setData(userData.data.keyData[keyDataType]);
      })
      .catch((error) => console.error(error));
  }, [userId, keyDataType]);

  if (!data) return <div>Loading...</div>;

  const dataTypeWord = {
    calorieCount: "Calories",
    proteinCount: "Proteins",
    carbohydrateCount: "Carbohydrates",
    lipidCount: "Lipids",
  };

  const dataIcon = {
    calorieCount: iconCalories,
    proteinCount: iconProteins,
    carbohydrateCount: iconCarbs,
    lipidCount: iconLipids,
  };

  const displayType = dataTypeWord[keyDataType];
  const dataIconType = dataIcon[keyDataType];

  return (
    <div className={styles.card}>
      <div>
        <img src={dataIconType} alt={displayType} />
      </div>
      <div className={styles.cardData}>
        <h2>
          {data}
          {keyDataType === "calorieCount" ? "kCal" : "g"}
        </h2>
        <p>{displayType}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  userId: PropTypes.number.isRequired, // required to get user data
  keyDataType: PropTypes.string,
};

export default Card;
