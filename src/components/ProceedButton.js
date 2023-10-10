import React, { useState } from 'react';
import './seatBooking.css';

const ProceedBooking = (props) => {
  const [isConfirmationVisible, setConfirmationVisible] = useState(false);

  const handleProceed = () => {

    if (props.selectedSeats.length == props.SelectTicketQuantity) {
      
      setConfirmationVisible(true);

    }

    else {
      alert("Please select the seats equql to no of tickets")
      window.location.reload();

    }



  }
  const confirmBooking = () => {
    setConfirmationVisible(false);
    props.setProceedClicked(true);

    setTimeout(() => {
      alert("Congratulations! Booking Confirmed!")
    }, 1000)

  };


  const cancelBooking = () => {
    
    setConfirmationVisible(false);

    window.location.reload(); 


  };


  return (
    <>
      <button className='proceed-btn' onClick={handleProceed}>Proceed</button>
      {isConfirmationVisible && (
        <div className="confirmation-popup">
          <p>Do you want to confirm your booking for {props.selectedSeats} seats?</p>
          <button onClick={confirmBooking}>Yes</button>
          <button onClick={cancelBooking}>No</button>
        </div>
      )}


    </>
  )
}

export default ProceedBooking



