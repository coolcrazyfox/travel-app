import Header from "./components/Header";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Explore from "./pages/Explore";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import RouterRoot from "./routes/RouterRoot";

function App() {
  return (
    <>
      <Header />
      <RouterRoot />
    </>
  );
}

export default App;
