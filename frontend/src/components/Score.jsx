import { useEffect, useState } from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";
import { GetUserMainInfo } from "../../apiService";

import styles from "./Score.module.css";

import PropTypes from "prop-types";

export default function Score({ userId }) {
  const [userScore, setUserScore] = useState(0);

  useEffect(() => {
    GetUserMainInfo(userId)
      .then((response) => {
        setUserScore(response.data.todayScore);
      })
      .catch((error) => console.error(error));
  }, [userId]);

  const chartData = [
    {
      name: "",
      fill: "#fbfbfb",
      score: 1,
    },
    {
      name: "score",
      fill: "#e60000",
      score: userScore,
    },
  ];

  const style = {
    top: 0,
    left: 15,
    lineHeight: "24px",
    color: "black",
    fontSize: "1.3rem",
  };

  return (
    <div className={styles.score}>
      <RadialBarChart
        width={300}
        height={300}
        cx={150}
        cy={150}
        innerRadius={70}
        outerRadius={105}
        barSize={20}
        startAngle={90}
        endAngle={450}
        data={chartData}
      >
        <RadialBar
          minAngle={15}
          clockWise={false}
          dataKey="score"
          background={{ fill: "#fbfbfb" }}
        />
        <circle cx={150} cy={150} r={80} fill="white" />

        <text
          x={120}
          y={135}
          dominantBaseline="middle"
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            fill: "black",
          }}
        >
          {`${userScore * 100}%`}
        </text>

        <text
          x={150}
          y={165}
          textAnchor="middle"
          dominantBaseline="middle"
          style={{
            fontSize: "1rem",
            fill: "black",
          }}
        >
          Of your Goal
        </text>
        <Legend
          iconType="circle"
          width={120}
          height={140}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={style}
        />
      </RadialBarChart>
    </div>
  );
}

Score.propTypes = {
  userId: PropTypes.number,
};
