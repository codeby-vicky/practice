import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navi = useNavigate();

    function my(){
        navi("/read")
    }
    return (

        <div align="center">

            <h2>Welcome to Movie Ticket Booking</h2>

            <br />

            <img
                src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600"
                alt="Movie"
                width="500"
                height="300"
            />

            <br /><br />

            <button onClick={() => navi("/add")}>
                Add Movie
            </button>

            &nbsp;&nbsp;

            <button
                onClick={() => navi("/read")}
            >
                Movie List
            </button>

            <br /><br />

            <h3>
                Book your favourite movie tickets online.
            </h3>

        </div>

    );

}

export default Home;