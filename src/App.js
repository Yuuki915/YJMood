import "./App.css";
<<<<<<< HEAD
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
=======
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Product from "./components/product-pages/Product";

function App() {
  return (
    <div className="App">
      <Product />
      <Header />

      <Main />

      <Footer />
    </div>
  );
>>>>>>> eba8bf3733c6045be87a0a4d05d0270bb7242a24
}

export default App;
