import React from 'react';

const Notice = (props) => {
  const squareBoxStyle = {
    width: '500px',
    height: '200px', 
    backgroundColor: 'white', 
  };
  
  const contentStyle = {
    color: 'black', 
    backgroundColor: 'white', 
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-4 mb-1">
         
          <div className="card" style={squareBoxStyle}>
            <div className="card-header bg-primary">
              <span className="text-white notification">
                <i className="fa fa-bullhorn"></i> Notice Board - {props.title}
              </span>
            </div>
            <div className="card-body notificationbody border border-primary" style={contentStyle}>
              <div className="scrolling-container">
                <ul className="notificationlist list-unstyled text-justify">
                  <li>
                    <span style={{ color: 'black', fontSize: '16px' }}>
                      <i className="fa fa-info-circle"></i>
                      <a
                        href="/public/FAQ/messageforNSP2.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Notice regarding biometric authentication of those students, belonging to MOMA schemes, who are currently residing in the District/State of their institution.
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notice;
