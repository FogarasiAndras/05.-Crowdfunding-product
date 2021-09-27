import React from 'react';
import './index.css';




 function Navbar(){
   return (
  
  <nav className="navbar navbar-expand-lg  bg-light">

    {/* Navbar */}
    <a className="navbar-brand" href="#">crowdfund</a>
    {/* Navbar toggler  */}
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
       {/* Navbar buttons on the right  */}
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Discover</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link" href="#">Get Started</a>
        </li>
      </ul>
    </div>
  </nav>
)
} 

  export default Navbar;