import "./App.css";
import Card from "./components/Card";
import PageNav from "./components/PageNav";
import SideNav from "./components/SideNav";
import User from "./components/User";

function App() {
  return (
    <>
      <PageNav />
      <SideNav />
      <User />
      <main>
        <section>
          <h1>neaovne meoamrgomerog aeomrvboeam</h1>
          <h1>neaovne meoamrgomerog aeomrvboeam</h1>
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
