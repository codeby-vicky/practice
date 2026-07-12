import { useState } from "react";

function Course(props){

    const [purchased, setPurchased] = useState(false);
    const [discountedPrice, setDiscountedPrice] = useState(null);


    function discount(){
        const rand = Math.floor(Math.random() * 95) + 1;
        const newPrice = Math.floor(props.price - (props.price * rand / 100));
        setDiscountedPrice(newPrice);
    }   

        function Buynow(discount){
        console.log("Thanks for buying the", props.name ,"course with a discount of", discount, "%");
        setPurchased(true);
        console.log(purchased);
    }

    
    

    return (
        <div className = "card">
            <img src = {props.image} alt = {props.name} />
            <h2>{props.name}</h2>
            <p>Price: ${props.price}</p>
            <p>Discounted Price: $ {discountedPrice ? discountedPrice : props.price} with discount {discountedPrice ? Math.floor((props.price - discountedPrice) / props.price * 100) : 0}%</p>
            <button onClick = {() => Buynow(20)}>Buy now</button>
            <p> {purchased ? "Course Purchased!" : "Buy now!"}</p>
            <button onClick = {discount}>Get Discount</button>
            <button onClick = {() => props.delete(props.id)}>Delete Card</button>
        </div>
    );
}
export default Course;