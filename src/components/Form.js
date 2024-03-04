import React from "react";
import { useState } from "react";

export default function Form (){
        const currentDate = new Date();
        const [firstname,setFirstname] = useState("")
        const [lastname,setLastname] = useState("")
        const [email,setEmail] = useState("")
        const [creditdebit,setCreditdebit] = useState("")
        const [numberoftickets,setNumberoftickets] = useState("")
        const currentDateTime = currentDate.toLocaleString(undefined, {
          timeZone: "America/New_York",
          timeStyle: "short",
          dateStyle: "long",
        });
        function postBooking () {
          fetch("http://localhost:5000/booking",
          {
            method:"POST",
            headers:{
              "Content-Type":"application/json",
            },
            body:JSON.stringify({
              firstname:firstname,
              lastname:lastname,
              email:email,
              creditdebit:creditdebit,
              numberoftickets:numberoftickets,
              date:currentDateTime + "EST"
            }),
          }) .then((response) => response.json())
          .then((data) => console.log(data));
        }
       return(
    <>
    <div className="mx-5 my-3">
    <form className="row g-3">
  <div className="col-md-6">
    <label htmlFor="inputFname4" className="form-label">
     First Name
    </label>
    <input type="Text" className="form-control" id="inputFName4" value={firstname} onChange={(e)=>{setFirstname(e.target.value)}}/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputLName4" className="form-label">
      Last Name
    </label>
    <input type="Text" className="form-control" id="inputLName4" value={lastname} onChange={(e)=>{setLastname(e.target.value)}} />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">
      Email
    </label>
    <input type="email" className="form-control" id="inputEmail4" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputCreditDebit4" className="form-label">
      Credit/Debit Number
    </label>
    <input type="password" className="form-control" id="inputCreditDebit4" value={creditdebit} onChange={(e)=>{setCreditdebit(e.target.value)}} />
  </div>
  <div className="col-md-2">
    <label htmlFor="inputNumber" className="form-label">
      Number Of Tickets
    </label>
    <input type="text" className="form-control" id="inputNumber" value={numberoftickets} onChange={(e)=>{setNumberoftickets(e.target.value)}} />
  </div>
  <div className="col-12">
  <button
  type="submit"
  
  className="btn btn-primary"
  data-bs-toggle="modal"
  data-bs-target="#exampleModal"
  onClick={postBooking}
>
  Confirm Booking
</button>

  </div>
</form>
</div>
<div className="modal-dialog modal-dialog-centered">
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>
    </>
   )
} 