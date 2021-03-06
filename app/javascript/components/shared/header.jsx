import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <Link to='/' className="navbar-brand goog">Online Sale</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to='/' className="nav-link">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link to='/' className="nav-link">New Product</Link>
          </li>
          <li className="nav-item">
            <Link to='/' className="nav-link">Sign In</Link>
          </li>
          <li className="nav-item">
            <Link to='/' className="nav-link">Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
)

export default Header