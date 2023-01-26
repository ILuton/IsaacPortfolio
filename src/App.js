import Landing from "./components/Landing";
import Nav from "./components/Nav";
import About from "./components/About";

import "./css/App.css";
function App() {
  return (
    <div className="app">
      <Nav />
      <Landing />
      <About />
    </div>
  );
}

export default App;
