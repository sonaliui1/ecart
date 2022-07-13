import React from 'react'

export default function Carousel() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://www.pantaloons.com/_next/image?url=https%3A%2F%2Fpublish-p33712-e119997.adobeaemcloud.com%2Fcontent%2Fdam%2Fadityabirlafashionandretailprogram%2Fhomepage%2Fjuly-22%2Fmain-banner%2Fchanges%2FWeek1-GFS-D.jpg.transform%2Fi1680x550%2Fimage.jpeg&w=1920&q=75" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="https://www.pantaloons.com/_next/image?url=https%3A%2F%2Fpublish-p33712-e119997.adobeaemcloud.com%2Fcontent%2Fdam%2Fadityabirlafashionandretailprogram%2Fcategorypage%2Fjuly-22%2Fchanges%2FWeek1-GFS-Women-D.jpg.transform%2Fi1680x550%2Fimage.jpeg&w=1920&q=75"alt=".."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="https://www.pantaloons.com/_next/image?url=https%3A%2F%2Fpublish-p33712-e119997.adobeaemcloud.com%2Fcontent%2Fdam%2Fadityabirlafashionandretailprogram%2Fhomepage%2Fjuly-22%2Fmain-banner%2Fchanges%2FWeek1-GFS-D.jpg.transform%2Fi1680x550%2Fimage.jpeg&w=1920&q=75" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}
