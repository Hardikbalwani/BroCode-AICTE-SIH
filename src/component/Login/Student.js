import React from "react";

const Student = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <span className="navbar-brand">
            <img
              style={{ width: "70px" }}
              src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
              alt=""
            />{" "}
            Welcome Rushikesh {props.userName}
          </span>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <span className="nav-link">
                  | Application ID: {props.appId}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-1 mx-2">
        <div className="row">
          <div className="col-12 col-md-2">
            {" "}
            {/* Decreased the width to col-md-2 */}
            <div className="square-box p-3">
              <div className="btn-group-vertical w-100">
                <button className="btn btn-primary mb-2">
                  Change Password
                </button>
                <button className="btn btn-danger mb-2">Logout</button>
                <button className="btn btn-success">Dashboard</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 mb-5">
            <div className="user-details p-3">
              <ul>
                <li>
                  <strong>Application ID:</strong> {props.appId}
                </li>
                <li>
                  <strong>Application Status:</strong> In Progress
                </li>
                <li>
                  <strong>Name:</strong>XYX
                </li>
              </ul>
              <li>
                <strong>Account Status:</strong> Active
              </li>
              <li className="mb-4">
                <strong>Courses Enrolled</strong>
              </li>
              <div className="row">
                <div className="col-md-4">
                  <div className="card mb-3" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">Course-1</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div
                    className="card mb-3"
                    style={{ width: "18rem", marginLeft: "10rem" }}
                  >
                    <div className="card-body">
                      <h5 className="card-title">Course-2</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div
                    className="card mb-3"
                    style={{ width: "18rem", marginLeft: "20rem" }}
                  >
                    <div className="card-body">
                      <h5 className="card-title">Course-3</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
  <div className="col-md-4">
    <div className="card mb-3" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">Course-4</h5>
        <p className="card-text">
          Some quick example text to build on the card title and
          make up the bulk of the card's content.
        </p>
      </div>
    </div>
  </div>

  <div className="col-md-4">
    <div className="card mb-3" style={{ width: '18rem', marginLeft:'10rem'}}>
      <div className="card-body">
        <h5 className="card-title">Course-5</h5>
        <p className="card-text">
          Some quick example text to build on the card title and
          make up the bulk of the card's content.
        </p>
      </div>
    </div>
  </div>

  <div className="col-md-4">
    <div className="card mb-3" style={{ width: '18rem', marginLeft:'20rem'}}>
      <div className="card-body">
        <h5 className="card-title">Course-6</h5>
        <p className="card-text">
          Some quick example text to build on the card title and
          make up the bulk of the card's content.
        </p>
      </div>
    </div>
  </div>
</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Student;
