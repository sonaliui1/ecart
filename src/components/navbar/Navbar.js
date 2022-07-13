import React from 'react'
import styles from './Navbar.modules.css'

export default function Navbar() {
  return (
    <div >
    <nav className="navbar navbar-expand-lg navbar-light bg-primay">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="#">Ecart</a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">WOMEN</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">MEN</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">KIDS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">HOMEDECORE</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">ACCESSORIES</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search for product and more" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search </button>
      </form>
    </div>
  </div>
</nav>
</div>
  )
}