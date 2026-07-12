import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {

    const [name, setName] = useState("");
    const [language, setLanguage] = useState("");
    const [rating, setRating] = useState("");
    const [duration, setDuration] = useState("");
    const [image, setImage] = useState("");

    const navi = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();

        await axios.post(
            "https://6a448279aab3faec3f687a09.mockapi.io/pro",
            {
                name: name,
                language: language,
                rating: rating,
                duration: duration,
                image: image
            }
        );

        alert("Movie Added Successfully");

        navi("/read");

    };

    return (

        <div align="center">

            <h2>Add Movie</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Enter Movie Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <br /><br />

                <input
                    type="text"
                    placeholder="Enter Language"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                />

                <br /><br />

                <input
                    type="text"
                    placeholder="Enter Rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                />

                <br /><br />

                <input
                    type="text"
                    placeholder="Enter Duration"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                />

                <br /><br />

                <input
                    type="text"
                    placeholder="Enter Image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />

                <br /><br />

                <button type="submit">
                    Add Movie
                </button>

            </form>

        </div>

    );

};

export default AddMovie;