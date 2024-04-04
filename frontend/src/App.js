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
import Signup from "./component/Login/signup";
import UserContext from "./component/UserContext";
import About from "./component/About";
function App() {
  return (
    <UserContext>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/notice" element={<Notices />} />
          <Route exact path="/scheme" element={<Schemes />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/student" element={<Student appId="MH210042014"/>} />
          <Route exact path="/educator" element={<Educator />} />
        <Route exact path="/register" element={<Signup />} />
          
        </Routes>
      </div>
      <div className="mb-4">
        <Footer />
      </div>
    </Router>
    </UserContext>
  );
}

export default App;
