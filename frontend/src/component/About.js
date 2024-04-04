import React from "react";

const AboutUs = () => {
  return (
    <section id="about-us" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="display-4 mb-4">About AICTE Educational Portal</h2>
            <p>
              The AICTE Educational Portal is committed to providing quality
              education and fostering innovation in technical education across
              India. With a rich history spanning several decades, we have
              consistently strived to elevate the standards of technical
              education in the country.
            </p>
            <p>
              Our mission is to empower students, educators, and institutions
              by providing access to a wealth of educational resources,
              promoting research and development, and ensuring that technical
              education in India remains globally competitive.
            </p>
          </div>
          <div className="col-lg-6">
            {/* You can add an image or other media here if desired */}
            <img
              src="https://digitallearning.eletsonline.com/wp-content/uploads/2023/04/AICTE-signs-MoU-with-UNESCO-MGIEP.jpg"
              alt="AICTE Educational Portal"
              className="img-fluid rounded-circle"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
