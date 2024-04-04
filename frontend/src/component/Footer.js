import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-4">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 d-flex">
        <ul className="list-unstyled list-inline justify-content-center mx-auto">
          <li className="list-inline-item">
            <a href="copyrightPolicy_New" target="_self" className="text-decoration-none text-white">
              Copyright Policy
            </a>
          </li>
          <li className="list-inline-item">
          <a href="privacyPolicy_New" target="_self" className="text-decoration-none text-white">Privacy Policy</a>
          </li>
          <li className="list-inline-item">
            <a href="termsAndConditions_New" target="_self" className="text-decoration-none text-white" >
              Terms and Conditions
            </a>
          </li>
          <li className="list-inline-item">
            <a href="disclaimer_New" target="_self" className="text-decoration-none text-white">
              Disclaimer
            </a>
          </li>
          <li className="list-inline-item">
            <a href="hyperlinkPolicy_New" target="_self" className="text-decoration-none text-white">
              Hyperlink Policy
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://scholarships.gov.in/siteMap" target="_self" className="text-decoration-none text-white" >
              Site Map
            </a>
          </li>
        </ul>
      </div>
      <div className="row">
        <div className="col-xl-6 col-lg-8 col-md-12 col-sm-12 offset-xl-3 offset-lg-2 pb-1 pt-1">
          <p className="text-center disclaimer">
            This site is designed, developed, and hosted by{" "}
            <a
              href="https://www.nic.in/"
              target="_blank"
              className="text-decoration-none text-white"
            >
              National Informatics Centre (NIC)
            </a>
            , <br /> content provided by National Scholarship Portal.
          </p>

          <p className="text-center disclaimer">
            <strong>Last Updated on 17th May 2022</strong>
          </p>
        </div>
        <div className="col-xl-8 col-lg-10 col-md-12 col-sm-12 offset-xl-2 offset-lg-1 pb-2">
          <div className="row">
            <div className="col-xl col-lg col-md-3 col-sm-4">
              <a href="https://mygov.in/" target="_blank">
                <img
                  src="https://scholarships.gov.in/public/Content/img/logos/meity.png"
                  className="img-fluid mx-auto d-flex mb-3"
                  style={{ height: "50px" }}
                />
              </a>
            </div>

            <div className="col-xl col-lg col-md-3 col-sm-4">
              <a href="https://www.nic.in/" target="_blank">
                <img
                  src="https://scholarships.gov.in/public/Content/img/logos/nic.png"
                  className="img-fluid mx-auto d-flex mb-3"
                  style={{ height: "50px" }}
                />
              </a>
            </div>
            <div className="col-xl col-lg col-md-3 col-sm-4">
              <a href="https://www.digitalindia.gov.in/" target="_blank">
                <img
                  src="https://scholarships.gov.in/public/Content/img/logos/indiaGov.png"
                  className="img-fluid mx-auto d-flex mb-3"
                  style={{ height: "50px" }}
                />
              </a>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 text-center">
              <a
                href="https://play.google.com/store/apps/details?id=in.gov.scholarships"
                target="_blank"
              >
                <img
                  src="https://play-lh.googleusercontent.com/AzWFWQfpAOzIWS7onAbQwSg02BAsp4IJHSgSmEM3MHE3qCBKI-nCO9fjnDKpzPuhoAM=w240-h480-rw"
                  className="img-fluid mx-2"
                  style={{ width: "60px" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
