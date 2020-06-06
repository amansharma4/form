import React from 'react'
import '../index.css';
function Navbar() {

    return (
        <div>
    
    <nav>
  <div className="nav-wrapper" style={{backgroundColor:"blue"}}>
    <a href="/" className="brand-logo left">Stock Management</a>
    <ul className="right hide-on-med-and-down">
      <li><a href="/">Home</a></li>
      <li><a href="/AddForm">Add Form</a></li>
     
    </ul>
  </div>
</nav>
        
  {/* <button id="waves-effect waves-light btn-large">Add Form</button> */}
  <a href ="/AddForm" className="waves-effect waves-light btn-small"  style={{marginTop: 40+"px"}} >Add Form</a>

        </div>
    )
}
// hide-on-med-and-down

export default Navbar;
