import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";

import Home from "./Home";
import AddMovie from "./AddMovie";
import ReadMovie from "./ReadMovie";
import UpdateMovie from "./UpdateMovie";
import MovieDetails from "./MovieDetails";
import Theatre from "./Theatre";
import SeatBooking from "./SeatBooking";
import PaymentPage from "./PaymentPage";
import Success from "./Success";
import DownloadTicket from "./DownloadTicket";

function App() {
  return (
    <>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/add" element={<AddMovie />} />

        <Route path="/read" element={<ReadMovie />} />

        <Route path="/update/:id" element={<UpdateMovie />} />

        <Route path="/details/:id" element={<MovieDetails />} />

        <Route path="/theatre/:id" element={<Theatre />} />

        <Route path="/seat/:id" element={<SeatBooking />} />

        <Route path="/payment" element={<PaymentPage />} />

        <Route path="/success" element={<Success />} />

        <Route path="/ticket" element={<DownloadTicket />} />
      </Routes>
    </>
  );
}

export default App;