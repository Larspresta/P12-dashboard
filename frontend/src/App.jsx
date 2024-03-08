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
  return (
    <>
      <PageNav />
      <SideNav />
      <User />
      <main>
        <section>
          <DailyActivity />
          <div className={styles.trainingCharts}>
            <Speed />
            <TrainingEffects />
            <Score />
          </div>
        </section>
        <aside>
          <Card />
          <Card />
          <Card />
          <Card />
        </aside>
      </main>
    </>
  );
}

export default App;
