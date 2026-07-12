import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const UpdateFood = () => {

    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [offer, setOffer] = useState("")
    const [image, setImage] = useState("")

    const navi = useNavigate()

    useEffect(() => {

        setId(localStorage.getItem("id"))
        setName(localStorage.getItem("name"))
        setPrice(localStorage.getItem("price"))
        setOffer(localStorage.getItem("offer"))
        setImage(localStorage.getItem("image"))

    }, [])

    const handleUpdate = async (e) => {

        e.preventDefault()

        await axios.put(
            `https://6a424d337602860e65214092.mockapi.io/pro/${id}`,
            {
                name: name,
                price: price,
                offer: offer,
                image: image
            }
        )

        alert("Product Updated Successfully")

        navi("/read")

    }

    return (
        <div align="center">

            <h2>Update Food</h2>

            <form onSubmit={handleUpdate}>

                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <br /><br />

                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />

                <br /><br />

                <input
                    type="text"
                    value={offer}
                    onChange={(e) => setOffer(e.target.value)}
                />

                <br /><br />

                <input
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />

                <br /><br />

                <button type="submit">
                    Update
                </button>

            </form>

        </div>
    )
}

export default UpdateFood