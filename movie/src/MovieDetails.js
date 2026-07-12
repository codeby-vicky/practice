import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MovieDetails = () => {

    const [movie, setMovie] = useState({});

    const navi = useNavigate();



    useEffect(() => {

        const data = JSON.parse(localStorage.getItem("movie"));

        if (data) {
            setMovie(data);
        }

    }, []);

    

    const handleBook = () => {

        navi("/theatre/" + movie.id);

    };

    return (

        <div align="center">

            <h2>Movie Details</h2>

            {
                movie.image ?

                    <div
                        style={{
                            border: "1px solid gray",
                            width: "350px",
                            padding: "20px"
                        }}
                    >

                        <img
                            src={movie.image}
                            alt=""
                            width="250"
                            height="300"
                        />

                        <h2>{movie.name}</h2>

                        <h3>Language : {movie.language}</h3>

                        <h3>Rating : ⭐ {movie.rating}</h3>

                        <h3>Duration : {movie.duration}</h3>

                        <button onClick={handleBook}>
                            Select Theatre
                        </button>

                    </div>

                    :

                    <h3>No Movie Found</h3>

            }

        </div>

    );

};

export default MovieDetails;