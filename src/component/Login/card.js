import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import Student from "./Student";
import Educator from "./Educator";
import Login  from "./login"
const Card = (props) => {
  const cardContent = (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <Link to={props.linkTo} className="btn btn-primary">
          {props.individual} login
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/student" element={<Student />} />
        <Route path="/educator" element={<Educator />} /> */}
        

      </Routes>

      {cardContent}
    </>
  );
};

export default Card;
