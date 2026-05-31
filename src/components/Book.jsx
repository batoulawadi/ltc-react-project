import { useState } from "react";

export default function Book(){

    const [formData, setFormData] = useState({
        fullName:"",
        phone: "",
        email: "",
        participants: "",
        city: ""

        }
    );

    function handleChange(e){
        const {name,value}=e.target
        setFormData({
            ...formData,
            [name]: value
        });
    }

    function handleSubmit(e){

        e.preventDefault();
        alert("Booking Submitted!")
        console.log(formData)
    }

    return(
        <div id="book" className="page">
        <h2 id="title">Book Now</h2>
        <form id="form" onSubmit={handleSubmit}>

       <div className="sec">

 <h3 className="sec-title">Personal Information</h3>
        <input  
        type="text"
         name="fullName" 
         placeholder="Full Name"  
         className="text-box" 
         onChange={handleChange}
         />

        <br/>

        <input 
        type="tel" 
        name="phone" 
        className="text-box" 
        placeholder="Phone Number" 
        onChange={handleChange}
        />

        <br/>

        <input 
        type="email"
        name="email"
        className="text-box"
        placeholder="Email Address"
        onChange={handleChange}
        />

       </div>

       <div className="sec">

          <h3 className="sec-title">Trip Details</h3>
        <input
        type="number"
        name="participants"
        placeholder="Participants"
        className="num-box"
        onChange={handleChange}
        
        />


        <div className="sec">

          <h3 className="sec-title">Customization</h3>

          <input
            type="text"
            name="city"
            placeholder="Departure City"
            className="text-box"
            onChange={handleChange}
          />

          <br />

          <button type="submit" id="book-btn">
            Book
          </button>

        </div>


       </div>

        </form>


        </div>
    )

}