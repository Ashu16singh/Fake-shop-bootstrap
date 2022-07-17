import React from 'react'
import Products from './Products'

export default function Home() {
  return (
    <><div className='container mx-auto'>

   
        <div id="carouselExampleDark" className="carousel carousel-dark slide mt-5" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="https://clipartmag.com/images/girls-night-out-clipart-29.jpg"  alt="..." className="d-block w-100"  style={{height:'400px',width:'100px'}}/>
      <div className="carousel-caption d-none d-md-block">
        <h5><strong>Fashion at it's peak ,Shop Now</strong></h5>
        <p>Trending jeans for Mens</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://clipground.com/images/sale-shopping-clipart-5.jpg" className="d-block w-100" alt="..." style={{height:'400px',width:'100px'}}/>
      <div className="carousel-caption d-none d-md-block">
        <h5><strong>Huge discount is running off... Shop Now</strong></h5>
        <p>Latest collection for Womens. </p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
 </div>
 <div>
 <Products/>
 </div>

    </>
  )
}
