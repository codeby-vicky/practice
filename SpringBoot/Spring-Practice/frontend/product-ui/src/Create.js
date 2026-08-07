import axios from 'axios';
import React, { useState } from 'react'

const Create = () => {

    const [img, setImg] = useState("");
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState("");
    const [offer, setOffer] = useState("");

    const Create = async(e) => {
      e.preventDefault()

      await axios.post("http://localhost:8080/product/create", {
          img: img,
          productname: name,
          description: desc,
          price: Number(price),
          offer: offer
      })

      alert("Data added successfully")
      setImg("");
      setName("");
      setDesc("");
      setPrice("");
      setOffer("");
    }

  return (
    <div>
        <form onSubmit={Create}>
        <input 
        type = "text"
        value = {img}
        placeholder='enter img'
        onChange = {(g)=> setImg(g.target.value)}
        />
        <br /><br />

        <input 
        type = "text"
        value = {name}
        placeholder='product name'
        onChange = {(g)=> setName(g.target.value)}
        />
        <br /><br />

        <input 
        type = "text"
        value = {desc}
         placeholder='description'
        onChange = {(g)=> setDesc(g.target.value)}
        />
        <br /><br />

        <input 
        type = "number"
        value = {price}
         placeholder='price'
        onChange = {(g)=> setPrice(g.target.value)}
        />
        <br /><br />

        <input 
        type = "text"
        value = {offer}
         placeholder='offer'
        onChange = {(g)=> setOffer(g.target.value)}
        />
        <br /><br />

        <button type="submit">Save</button>
        </form>
    </div>
  )
}

export default Create
