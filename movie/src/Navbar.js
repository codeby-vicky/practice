import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {

    const navi = useNavigate();

    return (

        <div align="center" style={{ marginTop: "20px" }}>

            <button onClick={() => navi("/")}>
                Home
            </button>

            &nbsp;&nbsp;

            <button onClick={() => navi("/add")}>
                Add Movie
            </button>

            &nbsp;&nbsp;

            <button onClick={() => navi("/read")}>
                Movie List
            </button>

            &nbsp;&nbsp;

            <button onClick={() => navi("/ticket")}>
                My Ticket
            </button>

        </div>

    );

};

export default Navbar;