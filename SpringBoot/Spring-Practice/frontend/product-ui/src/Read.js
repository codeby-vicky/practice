import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Read = () => {

    const [my, setMy] = useState([]);

    const read = async() => {
        const springUrl = await axios.get("http://localhost:8080/product/read")
        setMy(springUrl.data) 
    }

    useEffect(() => {
        read();
    },[])

    const handleDelete = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/product/del/${id}`);
        alert("Product Deleted Successfully");
    } catch (error) {
        console.error(error);
        alert("Delete Failed");
    }
};

  return (
    <div>
        {my.map((h)=>{
            return (
                <div key = {h.id}>
                    <img src={h.img} 
                    style={{width : "200px"}} 
                    alt='productimage'
                    />
                    <h4>{h.productname}</h4>
                    <h4>{h.description}</h4>
                    <h4>{h.price}</h4>
                    <h4>{h.offer}</h4>
                    <button onClick={() => handleDelete(h.id)}>
                        Delete
                    </button>
                </div>
            )
        })}
      
    </div>
  )
}

export default Read
