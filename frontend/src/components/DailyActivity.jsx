import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { GetUserActivity } from "../../apiService";

import PropTypes from "prop-types";

import styles from "./DailyActivity.module.css";

/**
 *
 * @param {object} props
 *  * @param {object} props.userId ID to get user daily activities data
 *
 * @returns {React.ReactElement} Daily activity chart that displays user weight and calories in a bar chart
 */

export default function DailyActivity({ userId }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    GetUserActivity(userId)
      .then((userActivity) => {
        setData(userActivity.data.sessions);
      })
      .catch((error) => console.log(error));
  }, [userId]);

  return (
    <div className={styles.activity}>
      <h3>Daily activity</h3>
      <BarChart
        width={1100}
        height={340}
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 15,
        }}
      >
        <XAxis dataKey="day" tickFormatter={(value, index) => index + 1} tickLine={false} />
        <YAxis
          yAxisId="left"
          orientation="left"
          domain={["dataMin - 2", "dataMax + 2"]}
          axisLine={false}
          tickLine={false}
        />
        <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} />
        <Tooltip />
        <Legend
          verticalAlign="top"
          align="right"
          wrapperStyle={{
            position: "absolute",
            top: "-1rem",
            paddingBottom: "20px",
            paddingRight: "20px",
          }}
          iconType="circle"
        />
        <Bar yAxisId="left" dataKey="kilogram" name="Weight (kg)" fill="#282D30" barSize={10} />
        <Bar yAxisId="right" dataKey="calories" name="Burned calories (kCal)" fill="#E60000" barSize={10} />
      </BarChart>
    </div>
  );
}
DailyActivity.propTypes = {
  userId: PropTypes.number.isRequired,
};
