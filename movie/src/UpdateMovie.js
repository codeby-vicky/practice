import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UpdateMovie = () => {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [language, setLanguage] = useState("");
    const [rating, setRating] = useState("");
    const [duration, setDuration] = useState("");
    const [image, setImage] = useState("");

    const navi = useNavigate();

    useEffect(() => {

        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setLanguage(localStorage.getItem("language"));
        setRating(localStorage.getItem("rating"));
        setDuration(localStorage.getItem("duration"));
        setImage(localStorage.getItem("image"));

    }, []);

    const handleUpdate = async (e) => {

        e.preventDefault();

        await axios.put(
            `https://6a448279aab3faec3f687a09.mockapi.io/pro/${id}`,
            {
                name: name,
                language: language,
                rating: rating,
                duration: duration,
                image: image
            }
        );

        alert("Movie Updated Successfully");

        navi("/read");

    };

    return (

        <div align="center">

            <h2>Update Movie</h2>

            <form onSubmit={handleUpdate}>

                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <br /><br />

                <input
                    type="text"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                />

                <br /><br />

                <input
                    type="text"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                />

                <br /><br />

                <input
                    type="text"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                />

                <br /><br />

                <input
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />

                <br /><br />

                <button type="submit">
                    Update Movie
                </button>

            </form>

        </div>

    );

};

export default UpdateMovie;