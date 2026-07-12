import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

    const [cart, setCart] = useState({})

    const navi = useNavigate()

    useEffect(() => {

        const data = JSON.parse(localStorage.getItem("cart"))

        if (data) {
            setCart(data)
        }

    }, [])

    const handlePurchase = () => {

        alert("🎉 Order Placed Successfully")

        localStorage.removeItem("cart")

        navi("/")

    }

    return (
        <div align="center">

            <h2>My Cart</h2>

            {
                cart.image ?

                    <div
                        style={{
                            border: "1px solid gray",
                            width: "300px",
                            padding: "20px"
                        }}
                    >

                        <img
                            src={cart.image}
                            alt=""
                            width="220"
                            height="180"
                        />

                        <h3>{cart.name}</h3>

                        <h3>₹ {cart.price}</h3>

                        <h3 style={{ color: "green" }}>
                            {cart.offer}
                        </h3>

                        <button onClick={handlePurchase}>
                            Purchase
                        </button>

                    </div>

                    :

                    <h3>Cart is Empty</h3>

            }

        </div>
    )
}

export default Cart