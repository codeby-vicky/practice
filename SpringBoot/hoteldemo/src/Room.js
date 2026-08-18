import axios from "axios";
import React, { useEffect, useState } from "react";

const Room = () => {

    const [rooms, setRooms] = useState([]);

    const [roomNumber, setRoomNumber] = useState("");
    const [roomType, setRoomType] = useState("");
    const [price, setPrice] = useState("");
    const [status, setStatus] = useState("");

    const readRooms = async () => {

        const response = await axios.get(
            "http://localhost:8080/room/read"
        );

        setRooms(response.data);
    };

    const createRoom = async (e) => {

        e.preventDefault();

        await axios.post(
            "http://localhost:8080/room/create",
            {
                roomNumber,
                roomType,
                price: Number(price),
                status
            }
        );

        alert("Room added successfully");

        setRoomNumber("");
        setRoomType("");
        setPrice("");
        setStatus("");

        readRooms();
    };

    const deleteRoom = async (id) => {

        await axios.delete(
            `http://localhost:8080/room/delete/${id}`
        );

        alert("Room deleted successfully");

        readRooms();
    };

    useEffect(() => {
        readRooms();
    }, []);

    return (
        <div>

            <h2>Room Management</h2>

            <form onSubmit={createRoom}>

                <input
                    type="text"
                    placeholder="Room Number"
                    value={roomNumber}
                    onChange={(e) => setRoomNumber(e.target.value)}
                />

                <br /><br />

                <input
                    type="text"
                    placeholder="Room Type"
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                />

                <br /><br />

                <input
                    type="number"
                    placeholder="Room Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />

                <br /><br />

                <input
                    type="text"
                    placeholder="Room Status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                />

                <br /><br />

                <button type="submit">
                    Add Room
                </button>

            </form>

            <hr />

            {rooms.map((room) => {

                return (
                    <div key={room.id}>

                        <h3>Room: {room.roomNumber}</h3>
                        <p>Type: {room.roomType}</p>
                        <p>Price: ₹{room.price}</p>
                        <p>Status: {room.status}</p>

                        <button
                            onClick={() => deleteRoom(room.id)}
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

export default Room;