// import React from 'react'
import './Style/Navbar.css'
const Home = () => {
  return (
    <div>
    <div>
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="./image/1.jpg" className="d-block w-100" alt="..." style={{ height: "500px" }} />
        </div>
        <div className="carousel-item">
          <img src="./image/2.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="./image/3.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="./image/4.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="./image/5.jpg" className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  <center><button className="w-50 bg border border-none border-danger rounded-1 text-white mt-4 py-1"><strong>REORDER</strong></button></center><div className="container">
    <p className="text-white my-4 fs-4 line"><strong>EXPLORE MENU</strong></p>
    <div className="mb-5 d-flex" style={{cursor:"pointer"}}>
      <div className="card" style={{ width: '12rem' }}>
        <img src="./image/a.png" className="card-img-top m-auto" alt="..." style={{ width: "140px" }} />
        <div className="card-body">
          <p className="card-text fw-bold mx-3">Everyday Value</p>
          <p className="circle"></p>
        </div>
      </div>
      <div className="card" style={{ width: '12rem' }}>
        <img src="./image/b.png" className="card-img-top m-auto" alt="..." style={{ width: "140px" }} />
        <div className="card-body">
          <p className="card-text fw-bold mx-3">Ala-Carte-&-Combos</p>
          <p className="circle"></p>
        </div>
      </div>
      <div className="card" style={{ width: '12rem' }}>
        <img src="./image/c.png" className="card-img-top m-auto" alt="..." style={{ width: "140px" }} />
        <div className="card-body">
          <p className="card-text fw-bold mx-3">Promotion</p>
          <p className="circle"></p>
        </div>
      </div>
      <div className="card" style={{ width: '12rem' }}>
        <img src="./image/d.png" className="card-img-top m-auto" alt="..." style={{ width: "168px" }} />
        <div className="card-body">
          <p className="card-text fw-bold mx-3">Signature-Boxes</p>
          <p className="circle"></p>
        </div>
      </div>
      <div className="card" style={{ width: '12rem' }}>
        <img src="./image/e.png" className="card-img-top m-auto" alt="..." style={{ width: "170px" }} />
        <div className="card-body">
          <p className="card-text fw-bold mx-3">Sharing</p>
          <p className="circle"></p>
        </div>
      </div>
    </div>
    <div>
    </div>
    <p className="text-white my-4 fs-4 line"><strong>BEST SELLERS</strong></p>
    <div className="d-flex" style={{cursor:"pointer"}}>
      <div className="cards my-2 mx-2" style={{ width: '16rem' }}>
        <div className="card-body">
          <div className="d-flex mx-5 px-5">
            <p className="card-title mx-1 py-3 px-2"></p>
            <p className="card-title mx-1 py-3 px-2"></p>
            <p className="card-title mx-1 py-3 px-2"></p>
          </div>
          <p className="card-text fw-bold px-3 py-2 fs-4">Krunch Burger</p>
        </div>
        <p className="list-group-item fw-bold fs-6 ms-auto px-3">Rs<span className="fw-bold fs-4">270</span></p>
        <img src="./image/h.png" className="card-img-top" alt="..." />
      </div>
      <div className="cards my-2 mx-2" style={{ width: '16rem' }}>
        <div className="card-body">
          <div className="d-flex mx-5 px-5">
            <p className="card-title mx-1 py-3 px-2"></p>
            <p className="card-title mx-1 py-3 px-2"></p>
            <p className="card-title mx-1 py-3 px-2"></p>
          </div>
          <p className="card-text fw-bold px-3 py-2 fs-4">Krunch Burger</p>
        </div>
        <p className="list-group-item fw-bold fs-6 ms-auto px-3">Rs<span className="fw-bold fs-4">270</span></p>
        <img src="./image/i.png" className="card-img-top" alt="..." />
      </div>
      <div className="cards my-2 mx-2" style={{ width: '16rem' }}>
        <div className="card-body">
          <div className="d-flex mx-5 px-5">
            <p className="card-title mx-1 py-3 px-2"></p>
            <p className="card-title mx-1 py-3 px-2"></p>
            <p className="card-title mx-1 py-3 px-2"></p>
          </div>
          <p className="card-text fw-bold px-3 py-2 fs-4">Krunch Burger</p>
        </div>
        <p className="list-group-item fw-bold fs-6 ms-auto px-3">Rs<span className="fw-bold fs-4">270</span></p>
        <img src="./image/j.png" className="card-img-top" alt="..." />
      </div>
      <div className="cards my-2 mx-2" style={{ width: '16rem' }}>
        <div className="card-body">
          <div className="d-flex mx-5 px-5">
            <p className="card-title mx-1 py-3 px-2"></p>
            <p className="card-title mx-1 py-3 px-2"></p>
            <p className="card-title mx-1 py-3 px-2"></p>
          </div>
          <p className="card-text fw-bold px-3 py-2 fs-4">Krunch Burger</p>
        </div>
        <p className="list-group-item fw-bold fs-6 ms-auto px-3">Rs<span className="fw-bold fs-4">270</span></p>
        <img src="./image/k.png" className="card-img-top" alt="..." />
      </div>
    </div>
    <p className="text-white mt-4 fs-4 line"><strong>TOP DEALS</strong></p>
    <div className="container">
    <div className="my-2 d-flex" style={{cursor:"pointer"}}>
    <div className="cards rounded-4 mx-1" style={{ width: '18rem', height: '28rem' }}>
    <div className="d-flex mx-5 px-5">
            <p className="card-title mx-1 py-3 px-2"></p>
            <p className="card-title mx-1 py-3 px-2"></p>
            <p className="card-title mx-1 py-3 px-2"></p>
          </div>
          <p style={{float:"right"}}>❤</p>
          <img src="./image/l.png" className="card-img-top w-75 mx-4 mb-5 px-2" alt="..." />
          <div className="card-body px-2">
            <h5 className="card-titl text-white fw-bold">Twister Combo</h5>
            <p className="card-tex text-white">Twister + 1 Regular fries + 1 Regular drink</p>
            <p className="fw-bold text-white">Rs 670</p>
          </div>
        </div>
        <div className="cards rounded-4 mx-1" style={{ width: '18rem', height: '28rem' }}>
    <div className="d-flex mx-5 px-5">
            <p className="card-title mx-1 py-3 px-2"></p>
            <p className="card-title mx-1 py-3 px-2"></p>
            <p className="card-title mx-1 py-3 px-2"></p>
          </div>
          <p style={{float:"right"}}>❤</p>
          <img src="./image/m.png" className="card-img-top w-75 mx-4 mb-5 px-2" alt="..." />
          <div className="card-body px-2">
            <h5 className="card-titl text-white fw-bold">Twister Combo</h5>
            <p className="card-tex text-white">Twister + 1 Regular fries + 1 Regular drink</p>
            <p className="fw-bold text-white">Rs 670</p>
          </div>
        </div>
        <div className="cards rounded-4 mx-1" style={{ width: '18rem', height: '28rem' }}>
    <div className="d-flex mx-5 px-5">
            <p className="card-title mx-1 py-3 px-2"></p>
            <p className="card-title mx-1 py-3 px-2"></p>
            <p className="card-title mx-1 py-3 px-2"></p>
          </div>
          <p style={{float:"right"}}>❤</p>
          <img src="./image/n.png" className="card-img-top w-75 mx-4 mb-5 px-2" alt="..." />
          <div className="card-body px-2">
            <h5 className="card-titl text-white fw-bold">Twister Combo</h5>
            <p className="card-tex text-white">Twister + 1 Regular fries + 1 Regular drink</p>
            <p className="fw-bold text-white">Rs 670</p>
          </div>
        </div>
        <div className="cards rounded-4 mx-1" style={{ width: '18rem', height: '28rem' }}>
    <div className="d-flex mx-5 px-5">
            <p className="card-title mx-1 py-3 px-2"></p>
            <p className="card-title mx-1 py-3 px-2"></p>
            <p className="card-title mx-1 py-3 px-2"></p>
          </div>
          <p style={{float:"right"}}>❤</p>
          <img src="./image/o.png" className="card-img-top w-75 mx-4 mb-5 px-2" alt="..." />
          <div className="card-body px-2">
            <h5 className="card-titl text-white fw-bold">Twister Combo</h5>
            <p className="card-tex text-white">Twister + 1 Regular fries + 1 Regular drink</p>
            <p className="fw-bold text-white">Rs 670</p>
          </div>
        </div>
    </div>
    </div>
    <div className="container">
    <div className="row">
<div className="col-sm-6 my-5">
<div className="ca">
  <img src="./image/p.png" alt="" className="rounded-4" style={{width:"550px"}}/>
</div>
</div>
<div className="col-sm-6 my-5">
<div className="ca mx-4">
  <img src="./image/q.png" alt="" className="rounded-4" style={{width:"550px"}}/>
</div>
</div>
</div>
<div className="row">
<div className="col-sm-6 mb-5">
<div className="c">
  <img src="./image/s.png" alt="" className="rounded-4" style={{width:"550px"}}/>
</div>
</div>
<div className="col-sm-6 mb-5">
<div className="ca mx-4">
  <img src="./image/r.jpg" alt="" className="rounded-4" style={{width:"550px"}}/>
</div>
</div>
</div>
</div>
    </div>
    <div className="con">
<footer className="py-5 foot px-5 mx-5">
<center className="mb-5"><img src="./image/download.png" alt=""/>
</center>
<div className="row">
<div className="col-6 col-md">
  <h5 className="text-white"> About Us</h5>
  <ul className="list-unstyled text-small">
    <li><a className="link-secondary text-decoration-none text-white" href="#">Mitao Bhook</a></li>
    <li><a className="link-secondary text-decoration-none text-white" href="#">Mitao Bhook - Scholarship</a></li>
    <li><a className="link-secondary text-decoration-none text-white" href="#">Privacy Policy</a></li>
    <li><a className="link-secondary text-decoration-none text-white" href="#">Careers</a></li>
  </ul>
  <p className="text-white pt-5">2023 KFC. All rights reserved</p>
</div>
<div className="col-6 col-md">
  <h5 className="text-white">Contact Us</h5>
  <ul className="list-unstyled text-small">
    <li><a className="link-secondary text-decoration-none text-white" href="#">Store Locator</a></li>
    <li><a className="link-secondary text-decoration-none text-white" href="#">Track Order</a></li>
  </ul>
</div>
<div className="col-6 col-md">
  <h5 className="text-white">Terms & Conditions</h5>
</div>
<div className="col-6 col-md">
  <ul className="list-unstyled text-small">
    <li className="my-2"><button className="borde rounded-2">Download on the app store<br/><span className="fw-bold fs-5">App Store</span></button></li>
    <li><button className="borde rounded-2">Get it on<br/><span className="fw-bold fs-5">Google Play</span></button></li>
  </ul>
  <p className="text-danger fw-bold pt-5">Powered by<br/><span className="text-white fs-small">SimpleX Technology Solutions</span></p>
</div>
</div>
</footer>
</div>
</div>
    </div>
  )
}

export default Home
