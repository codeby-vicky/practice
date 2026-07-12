import React, { useEffect, useState } from "react";

const DownloadTicket = () => {

    const [movie, setMovie] = useState({});

    
    const [customer, setCustomer] = useState("");
    const [mobile, setMobile] = useState("");
    const [theatre, setTheatre] = useState("");
    const [time, setTime] = useState("");
    const [seat, setSeat] = useState("");

    useEffect(() => {

        const data = JSON.parse(localStorage.getItem("movie"));

        if (data) {
            setMovie(data);
        }

        setCustomer(localStorage.getItem("customer"));
        setMobile(localStorage.getItem("mobile"));
        setTheatre(localStorage.getItem("theatre"));
        setTime(localStorage.getItem("time"));
        setSeat(localStorage.getItem("seat"));

    }, []);

    const handlePrint = () => {

        window.print();

    };

    return (

        <div align="center">

            <h2>Movie Ticket</h2>

            <div
                style={{
                    border: "2px solid black",
                    width: "350px",
                    padding: "20px"
                }}
            >

                <img
                    src={movie.image}
                    alt=""
                    width="200"
                    height="250"
                />

                <h3>Movie : {movie.name}</h3>

                <h3>Language : {movie.language}</h3>

                <h3>Rating : ⭐ {movie.rating}</h3>

                <h3>Duration : {movie.duration}</h3>

                <hr />

                <h3>Customer : {customer}</h3>

                <h3>Mobile : {mobile}</h3>

                <h3>Theatre : {theatre}</h3>

                <h3>Show Time : {time}</h3>

                <h3>Seat : {seat}</h3>

                <h3>
                    Booking ID :
                    BK
                    {Math.floor(Math.random() * 100000)}
                </h3>

            </div>

            <br />

            <button onClick={handlePrint}>
                Download Ticket
            </button>

        </div>

    );

};

export default DownloadTicket;