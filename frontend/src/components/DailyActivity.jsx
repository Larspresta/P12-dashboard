import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { GetUserActivity } from "../../apiService";

import PropTypes from "prop-types";

import styles from "./DailyActivity.module.css";

/* const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]; */

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
        height={300}
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 25,
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
        <Bar yAxisId="left" dataKey="kilogram" fill="#282D30" barSize={10} />
        <Bar yAxisId="right" dataKey="calories" fill="#E60000" barSize={10} />
      </BarChart>
    </div>
  );
}
DailyActivity.propTypes = {
  userId: PropTypes.number.isRequired,
};
