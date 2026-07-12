import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const ReadFood = () => {

    const [data, setData] = useState([])

    const navi = useNavigate()




    const getData = async () => {

        const res = await axios.get("https://6a424d337602860e65214092.mockapi.io/pro")

        setData(res.data)

    }





    useEffect(() => {

        getData()

    }, [])




    
    const handleDelete = async (id) => {

        await axios.delete(`https://6a424d337602860e65214092.mockapi.io/pro/${id}`)

        alert("Food Deleted Successfully")

        getData()

    }

    const handleUpdate = (id, name, price, offer, image) => {

        localStorage.setItem("id", id)
        localStorage.setItem("name", name)
        localStorage.setItem("price", price)
        localStorage.setItem("offer", offer)
        localStorage.setItem("image", image)

        navi("/update/" + id)

    }

    const addToCart = (item) => {

        localStorage.setItem("cart", JSON.stringify(item))

        alert("Product Added Successfully")

        navi("/cart")

    }

    return (
        <div>

            <h2 align="center">Food List</h2>

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
                                height="180"
                            />

                            <h3>{item.name}</h3>

                            <h4>₹ {item.price}</h4>

                            <h4 style={{ color: "green" }}>
                                {item.offer}
                            </h4>

                            <button
                                onClick={() => addToCart(item)}
                            >
                                Add To Cart
                            </button>

                            <br /><br />

                            <button
                                onClick={() =>
                                    handleUpdate(
                                        item.id,
                                        item.name,
                                        item.price,
                                        item.offer,
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
    )
}

export default ReadFood