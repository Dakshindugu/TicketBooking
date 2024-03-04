import React from "react"
import { Link } from "react-router-dom"

export default function Booking(){
    return(
        <>
        <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.centralpark.com/downloads/9882/download/summerstage-EmilyGoncalves.jpg?cb=b379bf412bd7ae8db9d7f451df9ef7bb&w=640" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://thumbs.6sqft.com/wp-content/uploads/2021/07/13123945/The-Rooftop-at-Pier-17-concert.jpg?format=webp" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://experience.nd.edu/assets/520469/800x600/billy_joel.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

<div className="container-fluid" > 
 <div className="row" style={{minHeight:100}}>
  <div className="col-sm-6 align-items-center d-flex">
    <img src="https://thumbs.dreamstime.com/b/concert-icon-vector-music-collection-thin-line-outline-illustration-linear-symbol-use-web-mobile-apps-logo-print-143541650.jpg"/>
  </div>

  <div className="col-sm-6 align-items-center d-flex">
    <div>
<p className="fs-4">As home to some of the greatest names in the industry, live music events up and down the state bring concertgoers to their feet. Whether you prefer classical, rock, big band, jazz or just about any other genre, you can find an ovation-worthy performance right here. And our music venues are just as diverse as our featured artists – from cozy clubs and intimate theaters to sprawling festival grounds and grand entertainment halls. So check out all of our upcoming shows on the next page, score your tickets, mark your calendar and get ready to be moved. Remember to check back often – this page is updated frequently with the latest and greatest lineup of concerts and musical events to hit.</p>
<button className="btn btn-primary px-5"> <Link className="nav-link" to="/book"> Get Booking</Link> </button>
</div>
</div>
 </div>
</div>

        </>
    )
}