import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark" style={{height:"40px"}}>
  <div className="container-fluid">
    <Link className="navbar-brand text-white" to="/"><b>{props.title}</b></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-a active text-white" aria-current="page" to="/" style={{"textDecoration":"none"}}>Home</Link>
        </li>
        
        
    
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
