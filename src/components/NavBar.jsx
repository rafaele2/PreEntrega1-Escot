import React from 'react'
import CardWidget from './CardWidget'

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">CompraHard</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
  
      
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="">Cpu</a></li>
            <li><a className="dropdown-item" href="">Gpu</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="">Motherboards</a></li>
          </ul>
        </li>
      
      </ul>
      <CardWidget/>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Busquedas" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>

   
  )
}

export default NavBar




{/* <header className={`header background--${background}`}>
<div className="menu-button">
<FontAwesomeIcon icon={fabars} size="lg" color="white"/>

</div>
</header> */}