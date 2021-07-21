import "./App.css";
import About from "./About";
import Work from "./Work";
import Cause from "./Cause";
import Mission from "./Mission";
import Map from "./Map";
import Navbar from "./Navbar";
import Banner from "./Banner";
function App() {
  return (
    <div className="societalcyst">
      <Navbar />
      <Banner />
      <About />
      <Map />
      <Work />
      <Cause />
      <Mission />
    </div>
  );
}

export default App;
