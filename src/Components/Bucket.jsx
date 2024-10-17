// import React from 'react'
import './Style/Bucket.css'
const Bucket = () => {
  return (
    <div className="row">
    <div className="col-md-9">
    <div className="cotaner my-4 rounded-1">
    <p className="fw-bold text-white fs-3 pt-2 px-5 ">Items From Your Cart</p>
    <p className='bg-white'><hr/></p>
    <img src='./image/s.png' alt='' className='im'/>
    <p className='text-white fs-4 t'>You haven’t added any items in bucket yet</p>
    <center><button className='b rounded-2'>EXPLORE MENU</button></center>
    </div>
    <div className='d-flex container1'>
    <div className="carrd mx-1 px-2 text-white" style={{width: '10rem'}}>
  <img src="./image/t.png" className="card-img-tp" alt="..." style={{width:"150px"}} />
  <div className="card-boy">
    <p className="card-tile">One Piece Chicken (One Piece)</p>
    <p className="card-tet">Rs 270</p>
    <button type="button" className="btn btn-outline-danger text-white">+ ADD...</button>
  </div>
</div>
<div className="carrd mx-1 px-2 text-white" style={{width: '10rem'}}>
  <img src="./image/u.png" className="card-img-tp" alt="..." style={{width:"150px"}} />
  <div className="card-boy">
    <p className="card-tile">One Piece Chicken (One Piece)</p>
    <p className="card-tet">Rs 270</p>
    <button type="button" className="btn btn-outline-danger text-white">+ ADD...</button>
  </div>
</div>
<div className="carrd mx-1 px-2 text-white" style={{width: '10rem'}}>
  <img src="./image/v.png" className="card-img-tp" alt="..." style={{width:"150px"}} />
  <div className="card-boy">
    <p className="card-tile">One Piece Chicken (One Piece)</p>
    <p className="card-tet">Rs 270</p>
    <button type="button" className="btn btn-outline-danger text-white">+ ADD...</button>
  </div>
</div>
<div className="carrd mx-1 px-2 text-white" style={{width: '10rem'}}>
  <img src="./image/w.png" className="card-img-tp" alt="..." style={{width:"150px"}} />
  <div className="card-boy">
    <p className="card-tile">One Piece Chicken (One Piece)</p>
    <p className="card-tet">Rs 270</p>
    <button type="button" className="btn btn-outline-danger text-white">+ ADD...</button>
  </div>
</div>
<div className="carrd mx-1 px-2 text-white" style={{width: '10rem'}}>
  <img src="./image/x.png" className="card-img-tp" alt="..." style={{width:"150px"}} />
  <div className="card-boy">
    <p className="card-tile">One Piece Chicken (One Piece)</p>
    <p className="card-tet">Rs 270</p>
    <button type="button" className="btn btn-outline-danger text-white">+ ADD...</button>
  </div>
</div>
    </div>
    </div>
    <div className="col-md-3">
    <div className='cont mt-4 rounded-1'> 
    <div className="d-flex">
    <p className="fw-bold text-white fs-3 pt-2 px-2 mx-5">0 Item Added</p>
            <p className="card-title mx-1 py-3 px-2"></p>
            <p className="card-title mx-1 py-3 px-2"></p>
            <p className="card-title mx-1 py-3 px-2"></p>
          </div>
          <p className='l'><hr/></p>
          <div className='box1 mx-3 rounded-1'>
          <p className='px-2 pt-2 text-white'>Special Instructions (Optional)</p>
          <p className='px-3'>Add Cooking/Delivery Instructions (Optional)</p>
    </div>
    <div className='box2 mx-3 my-3 rounded-3'>
    <center><p className='fw-bold fs-2 text-white'>Your Order</p></center>
    <p className='text-white fw-bold'>&nbsp; &nbsp;Sub Total: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Rs 0</p>
    <p className='text-white fw-bold'>&nbsp; &nbsp;Delivery Fee: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Rs 0</p>
    <p className='bg-white'><hr/></p>
    <p className='text-white fw-bold'>&nbsp; &nbsp;Total: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Rs 0</p>
    </div>
    <div className='badge'>
    <p className='fs-5'>0 Item <span className='fw-bold fs-4'>|Rs 0</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;Checkout</p>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Bucket
