import React from "react";
import nicImage from "./logo_new.png";
import g20Image from "./G20.jpeg.jpg"
import digitalIndiaImage from "./digital-india.png";

const Section2 = () => {
    return (
        <div className="bg-white p-3">
            <div className="row align-items-center">
                <div className="col-md-2 p-2 text-center">
                    <img
                        src={nicImage}
                        alt="NIC Left"
                        className="img-fluid"
                        style={{ maxWidth: "100%", maxHeight: "100px" }}
                    />
                </div>
                <div className="col-md-5">
                    <h1 className="font-weight-bold text-primary">AICTE Portal</h1>
                    <p className="font-weight-semibold text-secondary">Ministry of Electronics & Information Technology, Government of India</p>
                    <div className="text-danger font-weight-semibold"> (For Academic Year 2023-24)</div>
                </div>
                <div className="col-md-2 d-flex align-items-center">
                    <img
                        src={g20Image}
                        alt="G20"
                        className="img-fluid"
                        style={{ maxWidth: "100%", maxHeight: "100px" }}
                    />
                </div>
                <div className="col-md-2 d-flex align-items-center">
                    <img
                        src={digitalIndiaImage}
                        alt="Digital India"
                        className="img-fluid"
                        style={{ maxWidth: "100%", maxHeight: "100px" }}
                    />
                </div>
            </div>
            {/* <hr className="bg-danger" /> */}
        </div>
    );
};

export default Section2;
