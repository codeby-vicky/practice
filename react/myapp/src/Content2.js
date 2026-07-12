import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Content2 = ({cart,setCart}) => {

    const [my,setmy]=useState([])

    const handleread = async()=>{

        const total = await axios.get(
        "https://6a448279aab3faec3f687a09.mockapi.io/pro"
        )

        setmy(total.data)

    }

    useEffect(()=>{

        handleread()

    },[])



    const Addtocart=(product)=>{

        setCart([...cart,product])

        alert("Added Successfully")

    }

    const handleDelete = (f) => {
        const deleteproduct = my.filter(product => product.id !== f.id);
        setmy(deleteproduct);
    }


  return (

    <div>

        <h2>Products</h2>

        {

            my.map((f)=>{

                return(

                    <div key={f.id}>

                        <img
                        src={f.image}
                        width="150"
                        height="150"
                        alt=""
                        />

                        <h3>{f.username}</h3>

                        <h4>Rs. {f.price}</h4>

                        <p>{f.offer}</p>

                        <button
                        onClick={()=>Addtocart(f)}
                        >
                            Add To Cart
                        </button>

                        <button onClick={() => handleDelete(f)}>Delete</button>

                        <hr/>

                    </div>

                )

            })

        }

    </div>

  )

}

export default Content2