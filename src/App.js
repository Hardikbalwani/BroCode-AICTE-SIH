import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./component/Navbar";
import Notices from "./component/Notice";
import Schemes from "./component/Schemes";
import Home from "./component/Login/Home";
import Login from "./component/Login/login";
import Footer from "./component/Footer";
import Student from "./component/Login/Student";
import Educator from "./component/Login/Educator";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/notice" element={<Notices />} />
          <Route path="/scheme" element={<Schemes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login" element={<Login />} />
          
        </Routes>
      </div>
      <div className="mb-4">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
