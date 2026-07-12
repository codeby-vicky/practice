import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Theatre = () => {

    const [theatre, setTheatre] = useState("");

    const [time, setTime] = useState("");



    const navi = useNavigate();

    const handleNext = () => {

        if (theatre === "" || time === "") {

            alert("Please Select Theatre and Show Time");
            return;

        }

        localStorage.setItem("theatre", theatre);
        localStorage.setItem("time", time);

        navi("/seat/1");

    };

    return (

        <div align="center">

            <h2>Select Theatre</h2>

            <br />

            <select
                value={theatre}
                onChange={(e) => setTheatre(e.target.value)}
                style={{ width: "250px", height: "35px" }}>
                <option value="">Select Theatre</option>
                <option>PVR Cinemas</option>
                <option>INOX</option>
                <option>AGS Cinemas</option>
                <option>Cinepolis</option>
                <option>SPI Cinemas</option>
            </select>

            <br /><br />

            <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                style={{ width: "250px", height: "35px" }}
            >
                <option value="">Select Show Time</option>
                <option>10:00 AM</option>
                <option>1:30 PM</option>
                <option>5:00 PM</option>
                <option>9:00 PM</option>
            </select>

            <br /><br />

            <button onClick={handleNext}>
                Select Seat
            </button>

        </div>

    );

};

export default Theatre;