import React from 'react'
import CartWidget from './CartWidget'


const NavBar = ()=> {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
       CompraHard
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              CPU
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              GPU
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
             MOTHERBOARD
            </a>
          </li>
        </ul>
        <CartWidget/>
       
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Buscar"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Buscar
          </button>
        </form>
      </div>
    </div>
  </nav>
  

   
  )
}

export default NavBar

