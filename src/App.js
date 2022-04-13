import "./App.css";
import Product from "./components/product-pages/Product";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import NewPage from "./components/pages/NewPage";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* pages */}
          <Route path="/new" element={<NewPage />} />

          <Route path="/product" element={<Product />} />
        </Routes>
      </Router>
    </div>
  );
}
