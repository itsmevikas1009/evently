import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
