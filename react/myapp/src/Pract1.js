import React, { useState } from 'react'

const Pract1 = () => {
    const [fi, setfi] = useState([
        {
            id:1,
            productname:"saree",
            price:200
        },
        {
            id:2,
            productname:"shirt",
            price:300
        },
        {
            id:3,
            productname:"pant",
            price:400
        }
    ])

    const handledelete=(id)=>{
        console.log(id)

    const tot = fi.filter ((f) => {
        return (
            f.id !== id
        )
    })

    setfi(tot)

    }

  return (
    <div >
        {fi.map((h)=>{
            return (
                <div key = {h.id}>
                    <h4> product name {h.productname} </h4>
                    <h4> price {h.price} </h4>
                    <button onClick = {()=>handledelete(h.id)}>click here</button>
                    <hr />
                </div>
            )
        })}
      
    </div>
  )
}

export default Pract1
