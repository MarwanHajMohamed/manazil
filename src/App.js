import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Aims from "./components/Objectives";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Aims />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
