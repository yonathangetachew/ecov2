import React from "react";
import { BrowserRouter ,Route, Routes} from "react-router-dom";
import Shop from "./pages/Shop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";


const App = () => {
  return (
    <div className="body">
    <Header />
    <BrowserRouter>
    <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/contact" element={<Contact />}/>
          <Route path="/shop" element={<Shop/>}/>

    
    </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  )
};

export default App;