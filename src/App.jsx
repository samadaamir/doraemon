import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Gadgets from "./pages/Gadgets";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="characters">
        <Characters />
      </section>
      <section id="gadgets">
        <Gadgets />
      </section>
    </>
  );
};

export default App;