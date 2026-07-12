import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ReadMovie = () => {

    const [data, setData] = useState([]);

    const navi = useNavigate();



    const getData = async () => {

        const res = await axios.get(
            "https://6a448279aab3faec3f687a09.mockapi.io/pro"
        );

        setData(res.data);

    };



    useEffect(() => {

        getData();

    }, []);




    const handleDelete = async (id) => {

        await axios.delete(
            `https://6a448279aab3faec3f687a09.mockapi.io/pro/${id}`
        );

        alert("Movie Deleted Successfully");

        getData();

    };

    const handleUpdate = (id, name, language, rating, duration, image) => {

        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("language", language);
        localStorage.setItem("rating", rating);
        localStorage.setItem("duration", duration);
        localStorage.setItem("image", image);

        navi("/update/" + id);

    };

    const handleDetails = (item) => {

        localStorage.setItem("movie", JSON.stringify(item));

        navi("/details/" + item.id);

    };

    return (

        <div>

            <h2 align="center">Movie List</h2>

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "20px"
                }}
            >

                

                {
                    data.map((item) => (

                        <div
                            key={item.id}
                            style={{
                                border: "1px solid gray",
                                width: "250px",
                                padding: "10px",
                                textAlign: "center"
                            }}
                        >

                            <img
                                src={item.image}
                                alt=""
                                width="200"
                                height="250"
                            />

                            <h3>{item.name}</h3>

                            <h4>{item.language}</h4>

                            <h4>⭐ {item.rating}</h4>

                            <h4>{item.duration}</h4>

                            <button
                                onClick={() => handleDetails(item)}
                            >
                                Book Ticket
                            </button>

                            <br /><br />

                            <button
                                onClick={() =>
                                    handleUpdate(
                                        item.id,
                                        item.name,
                                        item.language,
                                        item.rating,
                                        item.duration,
                                        item.image
                                    )
                                }
                            >
                                Update
                            </button>

                            &nbsp;&nbsp;

                            <button
                                onClick={() => handleDelete(item.id)}
                            >
                                Delete
                            </button>

                        </div>

                    ))
                }

            </div>

        </div>

    );

};

export default ReadMovie;