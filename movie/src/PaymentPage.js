import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {

    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [upi, setUpi] = useState("");

    const navi = useNavigate();

    

    const handlePayment = (e) => {

        e.preventDefault();

        if (name === "" || mobile === "" || upi === "") {

            alert("Please Fill All Details");

            return;

        }

        localStorage.setItem("customer", name);
        localStorage.setItem("mobile", mobile);
        localStorage.setItem("upi", upi);

        alert("Payment Successful");

        navi("/success");

    };

    return (

        <div align="center">

            <h2>Payment Page</h2>

            <form onSubmit={handlePayment}>

                <input
                    type="text"
                    placeholder="Enter Customer Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <br /><br />

                <input
                    type="number"
                    placeholder="Enter Mobile Number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                />

                <br /><br />

                <input
                    type="text"
                    placeholder="Enter UPI ID"
                    value={upi}
                    onChange={(e) => setUpi(e.target.value)}
                />

                <br /><br />

                <button type="submit">
                    Pay Now
                </button>

            </form>

        </div>

    );

};

export default PaymentPage;