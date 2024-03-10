import PropTypes from "prop-types";
import styles from "./Card.module.css";
import iconCalories from "../assets/calories-icon.svg";
import iconCarbs from "../assets/carbs-icon.svg";
import iconProteins from "../assets/protein-icon.svg";
import iconLipids from "../assets/fat-icon.svg";

import { useEffect, useState } from "react";
import { GetUserMainInfo } from "../../apiService.js";

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
  userId: PropTypes.number,
  keyDataType: PropTypes.string,
};

export default Card;
