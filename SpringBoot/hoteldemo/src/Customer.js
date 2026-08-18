import axios from "axios";
import React, { useEffect, useState } from "react";

const Customer = () => {

    const [customers, setCustomers] = useState([]);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const readCustomers = async () => {
        const response = await axios.get(
            "http://localhost:8080/customer/read"
        );

        setCustomers(response.data);
    };

    const createCustomer = async (e) => {
        e.preventDefault();

        await axios.post(
            "http://localhost:8080/customer/create",
            {
                name,
                email,
                phone,
                address
            }
        );

        alert("Customer added successfully");

        setName("");
        setEmail("");
        setPhone("");
        setAddress("");

        readCustomers();
    };

    const deleteCustomer = async (id) => {

        await axios.delete(
            `http://localhost:8080/customer/delete/${id}`
        );

        alert("Customer deleted successfully");

        readCustomers();
    };

    useEffect(() => {
        readCustomers();
    }, []);

    return (
        <div>

            <h2>Customer Management</h2>

            <form onSubmit={createCustomer}>

                <input
                    type="text"
                    placeholder="Customer Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <br /><br />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br /><br />

                <input
                    type="text"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <br /><br />

                <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />

                <br /><br />

                <button type="submit">
                    Add Customer
                </button>

            </form>

            <hr />

            {customers.map((customer) => {

                return (
                    <div key={customer.id}>

                        <h3>{customer.name}</h3>
                        <p>{customer.email}</p>
                        <p>{customer.phone}</p>
                        <p>{customer.address}</p>

                        <button
                            onClick={() => deleteCustomer(customer.id)}
                        >
                            Delete
                        </button>

                        <hr />

                    </div>
                );
            })}

        </div>
    );
};

export default Customer;