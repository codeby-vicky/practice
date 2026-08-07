import axios from 'axios';
import React, { useState } from 'react'

const Delete = () => {

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/product/delete/${id}`);
            alert("Product Deleted Successfully");
        } catch (error) {
            console.error(error);
            alert("Delete Failed");
        }
    };

  return (
    <div>
      <button onClick={(id) => {handleDelete()}}></button>
    </div>
  )
}

export default Delete
