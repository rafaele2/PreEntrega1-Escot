import React from 'react'
import CardWidget from './CardWidget'
import {Link} from 'react-router-dom'

function NavBar(product) {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link  className="navbar-brand" to={`/`}>CompraHard</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
  
      
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to={`/ItemListContainer`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={`/category/:category${product.cpu}`}>Cpu</Link></li>
            <li><Link className="dropdown-item" to={`/category/:category${product.gpu}`}>Gpu</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to={`/category/:category${product.motherboard}`}>Motherboard</Link></li>
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