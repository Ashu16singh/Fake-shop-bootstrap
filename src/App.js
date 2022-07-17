import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SingleProduct from "./components/SingleProduct";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route
              path="/product/:id"
              exact
              element={<SingleProduct />}
            ></Route>
            
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
