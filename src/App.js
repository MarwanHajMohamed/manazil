import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Aims from "./components/Aims";
import Services from "./components/Services";
import About from "./components/About";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Aims />
      <Services />
      <About />
    </div>
  );
}

export default App;
