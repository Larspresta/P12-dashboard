import { RadialBarChart, RadialBar, Legend } from "recharts";

const data = [
  {
    name: "score",
    uv: 6.67,
    pv: 400,
    fill: "#e60000",
  },
];

const style = {
  top: 20,
  left: 20,
  lineHeight: "24px",
};

export default function Score() {
  return (
    <RadialBarChart
      width={500}
      height={300}
      cx={150}
      cy={150}
      innerRadius={100}
      outerRadius={140}
      barSize={15}
      data={data}
    >
      <RadialBar
        minAngle={15}
        label={{ position: "outsideStart", fill: "#fff" }}
        background
        clockWise
        dataKey="uv"
      />
      <Legend
        iconSize={10}
        width={120}
        height={140}
        layout="vertical"
        verticalAlign="middle"
        wrapperStyle={style}
      />
    </RadialBarChart>
  );
}
