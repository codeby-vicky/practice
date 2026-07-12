import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const AddFood = () => {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [offer, setOffer] = useState("")
    const [image, setImage] = useState("")

    const navi = useNavigate()


    

    const handleSubmit = async (e) => {

        e.preventDefault()

        await axios.post("https://6a424d337602860e65214092.mockapi.io/pro", {

            name: name,
            price: price,
            offer: offer,
            image: image

        })

        alert("Food Added Successfully")

        setName("")
        setPrice("")
        setOffer("")
        setImage("")

        navi("/read")

    }

    return (
        <div align="center">

            <h2>Add Food</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Enter Food Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <br /><br />

                <input
                    type="number"
                    placeholder="Enter Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />

                <br /><br />

                <input
                    type="text"
                    placeholder="Enter Offer"
                    value={offer}
                    onChange={(e) => setOffer(e.target.value)}
                />

                <br /><br />

                <input
                    type="text"
                    placeholder="Enter Image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />

                <br /><br />

                <button type="submit">Save</button>

                &nbsp;&nbsp;

                <button
                    type="button"
                    onClick={() => navi("/")}
                >
                    Home
                </button>

            </form>

        </div>
    )
}

export default AddFood