import "./App.css";
import Product from "./components/product-pages/Product";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";

import NewPage from "./components/pages/page/NewPage";
import SalePage from "./components/pages/page/SalePage";
import TopsPage from "./components/pages/page/TopsPage";
import BottomsPage from "./components/pages/page/BottomsPage";
import DressesPage from "./components/pages/page/DressesPage";
import OuterPage from "./components/pages/page/OuterPage";
import AccessoriesPage from "./components/pages/page/AccessoriesPage";
import SetPage from "./components/pages/page/SetPage";
import PajamasPage from "./components/pages/page/PajamasPage";
import MenPage from "./components/pages/page/MenPage";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* pages */}
          <Route path="/new" element={<NewPage />} />
          <Route path="/sale" element={<SalePage />} />
          <Route path="/tops" element={<TopsPage />} />
          <Route path="/bottoms" element={<BottomsPage />} />
          <Route path="/dresses" element={<DressesPage />} />
          <Route path="/outer" element={<OuterPage />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
          <Route path="/set" element={<SetPage />} />
          <Route path="/pajamas" element={<PajamasPage />} />
          <Route path="/men" element={<MenPage />} />

          {/* その他子ページ */}
          <Route path={`product`} element={<Product />} />
        </Routes>
      </Router>
    </div>
  );
}
