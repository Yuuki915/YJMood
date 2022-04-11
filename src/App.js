import "./App.css";
<<<<<<< Updated upstream

function App() {
  return <div className="App"></div>;
=======
import Product from "./components/product-pages/Product";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Router>
    </div>
  );
>>>>>>> Stashed changes
}

export default App;
