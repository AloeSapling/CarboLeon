import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { Home, About, Contact, Error, Map } from "./pages";




const App = () => {
  


  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/map" element={<Map />} />
          <Route path="*" element={<Error />} />/
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
