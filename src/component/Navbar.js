import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#F75700"}}> 
  <div className="container-fluid">
    <a className="navbar-brand" href="/home">
      <img style={{width:'30px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR45KpXraMF-TvLJ7VaTuKUtF-iWDZK3Q4iSw&usqp=CAU" alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-3">
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item mx-3">
          <Link to="/notice" className="nav-link">Notices</Link>
        </li>
        <li className="nav-item mx-3">
          <Link to="/scheme" className="nav-link">Schemes</Link>
        </li>
        
      </ul>

    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar

/* <section className="contentsection pt-5 mb-2 bg-#212529">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <Notice title="For Student" />
              <Notice title="For Institute" />
              <Notice title="For Nodal Officer" />
            </div>

            <div className="col-sm-5 my-4">
              <Schemes />
            </div>
          </div>
        </div>
      </section> */