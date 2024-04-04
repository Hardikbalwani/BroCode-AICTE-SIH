/* global bootstrap */

import React, { useEffect } from "react";

const Section4 = () => {
    const carouselItemStyle = {
        width: "100%", // Cover the entire width
        height: "500px", // Fixed height of 600 pixels
    };

    const imageStyle = {
        objectFit: "cover",
        width: "100%",
        height: "100%",
    };

    useEffect(() => {
        // Initialize the carousel
        const carousel = new bootstrap.Carousel(document.getElementById('carouselExampleFade'));
    }, []);

    return (
        <div className="">
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                   
                    <div className="carousel-item active" style={carouselItemStyle}>
                        <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202206/aicte-1-sixteen_nine.jpg?size=948:533" className="d-block w-100" alt="..." style={imageStyle} />
                    </div>
                    <div className="carousel-item active" style={carouselItemStyle}>
                        <img src="https://www.aicte-india.org/sites/default/files/images/slideshow/Web%20Banner.jpeg" className="d-block w-100" alt="..." style={imageStyle} />
                    </div>
                   
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Section4;
