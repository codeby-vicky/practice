import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SeatBooking = () => {

    const [seat, setSeat] = useState("");
    

    const navi = useNavigate();

    const handleBook = () => {

        if (seat === "") {

            alert("Please Select a Seat");

            return;

        }

        localStorage.setItem("seat", seat);

        alert("Seat Selected Successfully");

        navi("/payment");

    };

    return (

        <div align="center">

            <h2>Select Your Seat</h2>

            <br />

            <button onClick={() => setSeat("A1")}>A1</button>

            &nbsp;&nbsp;

            <button onClick={() => setSeat("A2")}>A2</button>

            &nbsp;&nbsp;

            <button onClick={() => setSeat("A3")}>A3</button>

            &nbsp;&nbsp;

            <button onClick={() => setSeat("A4")}>A4</button>

            <br /><br />

            <button onClick={() => setSeat("B1")}>B1</button>

            &nbsp;&nbsp;

            <button onClick={() => setSeat("B2")}>B2</button>

            &nbsp;&nbsp;

            <button onClick={() => setSeat("B3")}>B3</button>

            &nbsp;&nbsp;

            <button onClick={() => setSeat("B4")}>B4</button>

            <br /><br />

            <button onClick={() => setSeat("C1")}>C1</button>

            &nbsp;&nbsp;

            <button onClick={() => setSeat("C2")}>C2</button>

            &nbsp;&nbsp;

            <button onClick={() => setSeat("C3")}>C3</button>

            &nbsp;&nbsp;

            <button onClick={() => setSeat("C4")}>C4</button>

            <br /><br />

            <h3 style={{ color: "green" }}>
                Selected Seat : {seat}
            </h3>

            <br />

            <button onClick={handleBook}>
                Proceed To Payment
            </button>

        </div>

    );

};

export default SeatBooking;