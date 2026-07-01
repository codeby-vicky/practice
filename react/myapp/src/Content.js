import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const Content = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [offer, setOffer] = useState("");
  const [image, setImage] = useState("");

  const navi=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://6a448279aab3faec3f687a09.mockapi.io/pro",
        {
          username: name,
          price: price,
          offer: offer,
          image: image,
        }
      );

      alert("Data Added Successfully");

      setName("");
      setPrice("");
      setOffer("");
      setImage("");
      navi("/read")
    } 
    
    catch (error) {
      console.log(error);
      alert("Error while adding data");
    }
  };

  return (
    <div>
      <h2>Add Product</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL"
        />

        <br /><br />

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product Name"
        />

        <br /><br />

        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
        />

        <br /><br />

        <input
          type="text"
          value={offer}
          onChange={(e) => setOffer(e.target.value)}
          placeholder="Offer"
        />

        <br /><br />

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Content;