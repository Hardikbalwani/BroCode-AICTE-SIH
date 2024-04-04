import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import Login from "./login";
import Student from "./Student";
import Educator from "./Educator";
import Signup from "./signup";

const Card = (props) => {
  const cardContent = (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        
        
        <p className="card-text">
          To log in click here
        </p>
        {props.title !== "About Us" && (
          <Link to={props.linkTo} className="btn btn-primary">
            {props.individual} login
          </Link>
        )}
      </div>
    </div>
  );

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/student" element={<Student />} />
        <Route path="/educator" element={<Educator />} />
        <Route path="/register" element={<Signup />} />
      </Routes>

      {cardContent}
    </>
  );
};

export default Card;
