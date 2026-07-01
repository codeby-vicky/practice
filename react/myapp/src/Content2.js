import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const Content2 = () => {

  const[my,setmy]=useState([])  //[{}]

  const handleread=async()=>{

    const total=await axios.get("https://6a448279aab3faec3f687a09.mockapi.io/pro")
    setmy(total.data)
  }

  useEffect(()=>{
    handleread()
  },[])


         

  return (
    <div>
      <h2>Product Details</h2>

      {my.map((f)=>{
        return(
          <div key={f.id}>
            <img src={f.image} width="200" height="200" alt = "img"/>
            <h4>{f.username}</h4>
            <p>{f.offer}</p>
            <h4>{f.price}</h4>
            <button>card</button>
            <hr />
          </div>
        )
      })}
      </div>
  )
}

export default Content2