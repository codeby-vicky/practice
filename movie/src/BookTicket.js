import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BookTicket = ({ booking, setBooking }) => {

    const [seat, setSeat] = useState("")

    const navigate = useNavigate()

    const handleContinue = () => {

        if (seat === "") {

            alert("Please Select Seat")

            return

        }

        setBooking({

            ...booking,

            seat: seat

        })

        navigate("/payment")

    }

    return (

        <div align="center">

            <h1>Book Ticket</h1>

            <img

                src={booking.image}

                width="200"

                height="250"

                alt=""

            />

            <h2>{booking.movieName}</h2>

            <h3>{booking.theatre}</h3>

            <h3>{booking.date}</h3>

            <h3>{booking.time}</h3>

            <h2>Rs. {booking.price}</h2>

            <br/>

            <h2>Select Seat</h2>

            <select

                value={seat}

                onChange={(e)=>setSeat(e.target.value)}

            >

                <option value="">Choose Seat</option>

                <option>A1</option>

                <option>A2</option>

                <option>A3</option>

                <option>B1</option>

                <option>B2</option>

                <option>B3</option>

            </select>

            <br/><br/>

            <button

                onClick={handleContinue}

            >

                Continue

            </button>

        </div>

    )

}

export default BookTicket