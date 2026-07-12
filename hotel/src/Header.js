import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const navi = useNavigate()

    return (
        <div align="center">

            <h1>🍔 Food Order App</h1>

            <br />

            <button onClick={() => navi("/add")}>
                Add Food
            </button>

            &nbsp;&nbsp;

            <button onClick={() => navi("/read")}>
                Food List
            </button>

            &nbsp;&nbsp;

            <button onClick={() => navi("/cart")}>
                Cart
            </button>

        </div>
    )
}

export default Header