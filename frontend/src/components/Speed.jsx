import { AreaChart, Area, XAxis, Tooltip } from "recharts";
import styles from "./Speed.module.css";
const data = [
  {
    name: "L",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "M",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "M",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "J",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "V",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "S",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "D",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Speed() {
  return (
    <div className={styles.speed}>
      <h3>Average speed of your sessions</h3>
      <AreaChart
        width={300}
        height={300}
        data={data}
        margin={{
          top: 40,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <XAxis dataKey="name" />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="white" fill="#e60000" />
      </AreaChart>
    </div>
  );
}
