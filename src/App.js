import Landing from "./components/Landing";
import Nav from "./components/Nav";
import About from "./components/About";

import "./css/App.css";
import Project from "./components/Project";
function App() {
  return (
    <div className="app">
      <Nav />
      <Landing />
      <About />
      <Project/> 
    </div>
  );
}

export default App;
