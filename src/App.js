import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import CartPage from "./pages/Cart/CartPage";
import Nopage from "./pages/Nopage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="cartPage" element={<CartPage />}></Route>
          <Route path="*" element={<Nopage/>}></Route>
        </Routes>{" "}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
