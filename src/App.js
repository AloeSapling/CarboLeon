import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import './styles/index.css'
import './styles/phones.css'

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Error = lazy(() => import("./pages/Error"));
const Map = lazy(() => import("./pages/Map"));
const PollutionIndex = lazy(() => import("./pages/PollutionIndex"));

const App = () => {
  return (
    <Suspense
      fallback={
        <div className="fallback">
          <div className="loader" />
        </div>
      }
    >
      <BrowserRouter>
        <div className="app">
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/map" element={<Map />} />
            <Route path="/pollutionindex" element={<PollutionIndex />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
