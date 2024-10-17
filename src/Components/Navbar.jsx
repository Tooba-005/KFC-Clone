// import React from 'react'

import { Link } from "react-router-dom"
import './Style/Navbar.css'
import { toast } from "react-toastify";
const Navbar = () => {
  const toastify=()=>{
    toast.error("Enable Your Location for nearby");
  }
  return (
    <div>
    <nav className="navbar py-3" aria-label="Dark offcanvas navbar">
    <div className="container-fluid mx-5">
      <button className="navbar-toggler bg-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarDark" aria-controls="offcanvasNavbarDark" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="offcanvas offcanvas-start text-bg-dark" tabIndex={-1} id="offcanvasNavbarDark" aria-labelledby="offcanvasNavbarDarkLabel">
        <div className="offcanvas-header">
          <button className="offcanvas-title text-white bg-danger border border-danger rounded-3" id="offcanvasNavbarDarkLabel">Login</button>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <hr/>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="#">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">Link</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex mt-3" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
      <div className="me-auto d-flex">
        <Link to="/" className="text-decoration-none"><h1 className="text mx-4"><strong><i>KFC</i></strong></h1></Link>
        <div>
          <button type="button" className="btn btn-outline-danger px-5 my-2 text-white" data-bs-toggle="modal" data-bs-target="#exampleModal"><strong>DELIVERY</strong></button>
          <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
              <div className="d-flex m-auto">
              <p className="card-title mx-1 py-3 px-2"></p>
              <p className="card-title mx-1 py-3 px-2"></p>
              <p className="card-title mx-1 py-3 px-2"></p>
            </div>
                <div className="modal-header">
                  <h1 className="modal-title fs-5 fw-bold px-5" id="exampleModalLabel">Select Your Location for Delivery</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                  <fieldset>
                  <label type="address">Enter Full Address</label>

                  </fieldset>
                </div>
                <div className="modal-footer">
                  <p className="m-auto">Already a use?</p>
                  <a className="m-auto text-decoration-none text-white">Login</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button type="button" className="btn btn-outline-danger px-5 my-2 text-white mx-3" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={toastify}><strong>PICKUP</strong></button>
          <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-contnt">
              <div className="d-flex m-auto"> 
              <p className="card-title mx-1 py-3 px-2"></p>
              <p className="card-title mx-1 py-3 px-2"></p>
              <p className="card-title mx-1 py-3 px-2"></p>
            </div>
                <div className="modal-header">
                  <h1 className="modal-title fs-5 fw-bold px-5" id="exampleModal">Pickup Your Order</h1>
                  <button type="button" className="btn-clse" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                
                </div>
                <div className="modal-footer">
                  <p className="m-auto">Already a use?</p>
                  <a className="m-auto text-decoration-none text-white">Login</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link className="navbar-brand mx-3" to="/bucket"><img src="/image/buc.PNG" alt="" style={{ width: "50px" }} /></Link>
    <Link to="/login"><button className="log rounded-3 text-white px-2 py-1">Login</button></Link>
    </div>
  </nav>
    </div>
  )
}

export default Navbar
