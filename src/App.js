import "./App.css";
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
}

export default App;
