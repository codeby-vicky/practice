import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {



    const navi = useNavigate();


    
    const handleTicket = () => {

        alert("Booking Confirmed Successfully");

        navi("/ticket");

    };

    return (

        <div align="center">

            <br /><br />

            <h1 style={{ color: "green" }}>
                ✅ Payment Successful
            </h1>

            <br />

            <h2>
                🎉 Movie Ticket Booked Successfully
            </h2>

            <br />

            <button onClick={handleTicket}>
                Download Ticket
            </button>

        </div>

    );

};

export default Success;