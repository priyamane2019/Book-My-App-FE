import React from 'react'
import { PiOfficeChair } from "react-icons/pi"
import './seatBooking.css';

const TTR = () => {

  const renderPrimeSeats = () => {
    const totalSeats = 60;
    const seats = [];
    for (let i = 1; i <= totalSeats; i++) {
      //   const isSelected = selectedSeats.includes(i);
      //   const isUnavailable = unavailableSeats.includes(i);
      //   const isBooked = proceedClicked && isSelected;
      seats.push(
        <div className='primium-seat'
          key={i}
        >
          <PiOfficeChair />
        </div>
      );
    }
    return seats;
  };

  return (
    <>
      <br />
      <div className='primium-name'>PRIMIUM-RS. 470.00 </div>
      <hr />
      <div className="primium-seats-layout">
        <div className="primium-row">
          <div className="row-label-primium">A</div>
          <div className="row-label-primium">B</div>
          <div className="row-label-primium">C</div>
        </div>
        <div className="prime-seat-container">{renderPrimeSeats()}</div>

      </div>
    </>
  )
}

export default TTR