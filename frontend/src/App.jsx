import { useState } from "react";
import styles from "./App.module.css";
import DailyActivity from "./components/DailyActivity";
import Card from "./components/Card";
import PageNav from "./components/PageNav";
import SideNav from "./components/SideNav";
import User from "./components/User";
import Speed from "./components/Speed";
import TrainingEffects from "./components/TrainingEffects";
import Score from "./components/Score";

function App() {
  const [userId, setUserId] = useState(12);

  function handleSetUserId(e) {
    setUserId(Number(e.target.value));
  }

  return (
    <>
      <PageNav />
      <SideNav />
      <User userId={userId} />
      <main>
        <section>
          <DailyActivity userId={userId} />
          <div className={styles.trainingCharts}>
            <Speed userId={userId} />
            <TrainingEffects userId={userId} />
            <Score userId={userId} />
          </div>
        </section>
        <aside>
          <Card userId={userId} keyDataType="calorieCount" />
          <Card userId={userId} keyDataType="proteinCount" />
          <Card userId={userId} keyDataType="carbohydrateCount" />
          <Card userId={userId} keyDataType="lipidCount" />
        </aside>
      </main>
      <div className={styles.userSelect}>
        <select name="user" onChange={handleSetUserId} value={userId}>
          <option value="12">Karl</option>
          <option value="18">Cecilia</option>
        </select>
      </div>
    </>
  );
}

export default App;
