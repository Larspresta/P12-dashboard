import { AreaChart, Area, XAxis, Tooltip } from "recharts";
import { useEffect, useState } from "react";
import styles from "./Speed.module.css";
import { GetUserSessions } from "../../apiService";
import PropTypes from "prop-types";

/**
 *
 * @param {object} props
 * @param {object} props.userId ID to get user nutrition data
 *
 * @returns {React.ReactElement} Component to display user weekly session's speed in an area chart
 */

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "white",
          padding: "10px",
          textAlign: "center",
        }}
      >
        <p>{payload[0].value} mins</p>
      </div>
    );
  }

  return null;
};

export default function Speed({ userId }) {
  const [data, setData] = useState(null);

  const weekdayLetters = ["S", "M", "T", "W", "T", "F", "S"];

  useEffect(() => {
    GetUserSessions(userId)
      .then((userActivity) => {
        setData(userActivity.data.sessions);
      })
      .catch((error) => console.log(error));
  }, [userId]);

  return (
    <div className={styles.speed}>
      <h3>Average speed of your sessions</h3>
      <AreaChart
        width={300}
        height={200}
        data={data}
        margin={{
          top: 0,
          right: 20,
          left: 20,
          bottom: 20,
        }}
      >
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tickFormatter={(index) => weekdayLetters[index - 1]}
          tick={{ fill: "white" }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Area type="monotone" dataKey="sessionLength" stroke="white" fill="#e60000" />
      </AreaChart>
    </div>
  );
}

Speed.propTypes = {
  userId: PropTypes.number.isRequired, // required to get user data
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.object),
};
