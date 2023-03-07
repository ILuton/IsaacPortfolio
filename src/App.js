import Landing from "./components/Landing";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";

import "./css/App.css";
import Project from "./components/Project";
function App() {
  return (
    <div className="app">
      <Nav />
      <Landing />
      <About />
      <Project/> 
      <Contact/>
    </div>
  );
}

export default App;
