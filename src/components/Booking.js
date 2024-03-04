import React from "react"
import {Link} from "react-router-dom"


export default function Booking(){
    return(
        <>

<div className="container text-center">
  <div className="row py-2">
    <div className="col">
    <div className="card text-bg-dark">
  <img src="https://images7.alphacoders.com/133/1339451.png" className="card-img" alt="..." />
  <div className="card-img-overlay">
    <h5 className="card-title">Rock</h5>
    <p className="card-text">
      29 Feb
    </p>
  </div>
</div>
    </div>
    <div className="col">
    <div className="card text-bg-dark">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-lJMlLQKv71A65f1jmXprok-wO4qoGJZkuw&usqp=CAU" className="card-img" alt="..." />
  <div className="card-img-overlay">
    <h5 className="card-title">Pop</h5>
    <p className="card-text">
     31 March
    </p>
  </div>
</div>
    </div>
    <div className="col">
    <div className="card text-bg-dark">
  <img src="https://s3.dualstack.us-east-1.amazonaws.com/busites_www/cynthiawoods/pages/meta/1/1/web_background_kenny_chesney_1706540348.jpg" className="card-img" alt="..." />
  <div className="card-img-overlay">
    <h5 className="card-title">Classical</h5>
    <p className="card-text">
      17 May
    </p>
    <Link type="button" class="btn btn-dark mt-5" to="/form">Book</Link>
  </div>
</div>
    </div>
  </div>
  <div className="row py-2">
    <div className="col" >
    <div className="card text-bg-dark" >
  <img src="https://i.redd.it/irq1h9lb84fb1.jpg" style={{height:300}} className="card-img" alt="..." />
  <div className="card-img-overlay">
    <h5 className="card-title" >Jazz</h5>
    <p className="card-text">
      23 June
    </p>
  </div>
</div>
    </div>
    <div className="col">
    <div className="card text-bg-dark">
  <img src="https://www.visitphilly.com/wp-content/uploads/2024/01/Fillmore-interior-lights-LiveNation-2200x1237px.jpg"  style={{height:300}} className="card-img" alt="..." />
  <div className="card-img-overlay">
    <h5 className="card-title">Disco</h5>
    <p className="card-text">
      3 July
    </p>
  </div>
</div>
    </div>
    <div className="col">
    <div className="card text-bg-dark">
  <img src="https://edm.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MjAxMjgyNDQ0MDMxMTc0MTcx/2023-10-02-sphere-fury.jpg" className="card-img" alt="..." />
  <div className="card-img-overlay">
    <h5 className="card-title">Abstract</h5>
    <p className="card-text">
      12 Sep
    </p>
  </div>
</div>
    </div>
  </div>
  <div className="row py-2">
    <div className="col">
    <div className="card text-bg-dark">
  <img src="https://diseasecalleddebt.com/wp-content/uploads/2022/11/concert.jpeg" className="card-img" alt="..." />
  <div className="card-img-overlay">
    <h5 className="card-title">Folk</h5>
    <p className="card-text">
      30 Oct
    </p>
  </div>
</div>
    </div>
    <div className="col">
    <div className="card text-bg-dark">
  <img src="https://images.prismic.io/greenly/91646f83-b336-4c62-b755-594bbb5d60fe_Sustainable+Concert+Tours+Which+Artists+Care+the+Most%3F+2.jpg?auto=format%2Ccompress&fit=max&w=1800" className="card-img" alt="..." />
  <div className="card-img-overlay">
    <h5 className="card-title">Rap</h5>
    <p className="card-text">
      22 Nov
    </p>
  </div>
</div>
    </div>
    <div className="col">
    <div className="card text-bg-dark">
  <img src="https://www.alpinehearingprotection.com/cdn/shop/articles/2._Hearing_protection_at_festivals_and_concerts.png?v=1665070349&width=1100" className="card-img" alt="..." />
  <div className="card-img-overlay">
    <h5 className="card-title">Singer</h5>
    <p className="card-text">
      25 Dec
    </p>
  </div>
</div>
    </div>
  </div>
</div>

        
        </>
    )
}