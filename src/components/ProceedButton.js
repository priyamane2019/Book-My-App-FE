import React, { useState } from 'react';
import './seatBooking.css';

const ProceedBooking = (props) => {
  const [isConfirmationVisible, setConfirmationVisible] = useState(false);

  const handleProceed = () => {

    if (props.selectedSeats.length == props.SelectTicketQuantity) {
      // props.setProceedClicked(true);
      setConfirmationVisible(true);

    }

    else {
      alert("Please select the seats equql to no of tickets")
      window.location.reload();

    }


    // if (props.selectedSeats.length == 0)
    // {
    //   alert("Please select The Tickets")
    //   setConfirmationVisible(false);

    // }else{
    //   setConfirmationVisible(true);

    // }
    // props.setProceedClicked(true);

  }
  const confirmBooking = () => {
    setConfirmationVisible(false);
    props.setProceedClicked(true);

    setTimeout(() => {
      alert("Congratulations! Booking Confirmed!")
    }, 1000)

  };


  const cancelBooking = () => {
    // Hide the confirmation popup when the user cancels
    setConfirmationVisible(false);

    window.location.reload(); // Refresh the page


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





/*import React, { useState } from 'react';

function App() {
  const [selectedSeats, setSelectedSeats] = useState(0);
  const [isConfirmationVisible, setConfirmationVisible] = useState(false);

  const handleSeatClick = () => {
    // Implement your logic here to handle seat selection
    // For this example, we'll just increase the selected seats count by 1
    setSelectedSeats(selectedSeats + 1);
  };

  const handleProceedClick = () => {
    // Show the confirmation popup when the "Proceed" button is clicked
    setConfirmationVisible(true);
  };

  const confirmBooking = () => {
    // Implement your logic to confirm the booking here
    // For this example, we'll just hide the confirmation popup
    setConfirmationVisible(false);
    alert('Booking confirmed!'); // You can replace this with your own logic.
  };

  const cancelBooking = () => {
    // Hide the confirmation popup when the user cancels
    setConfirmationVisible(false);
  };

  return (
    <div>
      <h1>Select Seats</h1>
      <p>Selected Seats: {selectedSeats}</p>

      {/* Create a number of seat divs, and add onClick handler */
/*
<div className="seat" onClick={handleSeatClick}></div>
<div className="seat" onClick={handleSeatClick}></div>
<div className="seat" onClick={handleSeatClick}></div>
{/* Add more seat divs as needed */

/*<button onClick={handleProceedClick}>Proceed</button>

      {/* Show the confirmation popup conditionally */
/*{isConfirmationVisible && (
        <div className="confirmation-popup">
          <h2>Confirmation</h2>
          <p>Do you want to confirm your booking for {selectedSeats} seats?</p>
          <button onClick={confirmBooking}>Yes</button>
          <button onClick={cancelBooking}>No</button>
        </div>
      )}
    </div>
  );
}

export default App;*/