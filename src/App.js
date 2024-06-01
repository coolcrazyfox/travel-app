import Header from "./components/Header";
import Hero from "./components/Hero";
import s from "./styles/Header.module.css";

function App() {
  return (
    <div className={s.body}>
      <Header />
      <Hero />
    </div>
  );
}

export default App;
