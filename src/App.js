import "./App.css";
import Product from "./components/product-pages/Product";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Routes>
          <Route path="/home" element={<Home />}>
            <Link to="/">Home</Link>
          </Route>
          <Route path="/product" element={<Product />}></Route>
        </Routes> */}
        <Product />
        <Home />
      </Router>
    </div>
  );
}

export default App;
