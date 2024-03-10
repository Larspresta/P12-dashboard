import { useEffect, useState } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";
import { GetUserPerformance } from "../../apiService";
import styles from "./TrainingEffects.module.css";
import PropTypes from "prop-types";

export default function TrainingEffects({ userId }) {
  const [performanceData, setPerformanceData] = useState(null);

  useEffect(() => {
    GetUserPerformance(userId)
      .then((response) => {
        const { kind, data: performanceData } = response.data;
        console.log(kind, performanceData);

        const structuredData = performanceData.map((item) => ({
          ...item,
          kind: kind[item.kind],
        }));

        setPerformanceData(structuredData);
        console.log(structuredData);
      })
      .catch((error) => console.error(error));
  }, [userId]);

  console.log(performanceData);

  return (
    <div className={styles.performance}>
      <RadarChart
        cx="48%"
        cy="50%"
        outerRadius="60%"
        width={300}
        height={300}
        data={performanceData}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis dataKey="kind" tick={{ fill: "white", fontSize: "0.9rem" }} />
        <Radar name="Mike" dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.8} />
      </RadarChart>
    </div>
  );
}

TrainingEffects.propTypes = {
  userId: PropTypes.number,
};
