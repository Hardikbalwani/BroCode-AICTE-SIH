import React from "react";

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

    return (
        <div className="">
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" style={carouselItemStyle}>
                        <img src="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..." style={imageStyle} />
                    </div>
                    <div className="carousel-item" style={carouselItemStyle}>
                        <img src="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..." style={imageStyle} />
                    </div>
                    <div className="carousel-item" style={carouselItemStyle}>
                        <img src="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..." style={imageStyle} />
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
