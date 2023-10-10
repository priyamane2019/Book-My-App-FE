import React, { useState } from 'react';
import './seatBooking.css';
import { PiOfficeChair } from "react-icons/pi"
import ProceedBooking from './ProceedButton';
import PremiumSeats from "./PremiumSeats"

const SeatBooking = () => {
  const totalSeats = 98;
  const non_premium_seats = Array.from({ length: 21 }, (_, index) => index + 1);
  const normal_seats = Array.from({ length: 32 }, (_, index) => index + 1);
  const ticketsNumbers = Array.from({ length: 15 }, (_, i) => i + 1);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [sequentialMode, setSequentialMode] = useState(false);
  const [SelectTicketQuantity, setSelectTicketQuantity] = useState(1);
  const [proceedClicked, setProceedClicked] = useState(false);
  const [unavailableSeats, setUnavailableSeats] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]); // Example unavailable seats

  const handleSeatClick = (seatNumber) => {
    if (proceedClicked) {
      return;
    }


    if (unavailableSeats.includes(seatNumber)) {
      alert('This seat is unavailable.');
      return;
    }

    if (sequentialMode) {
      const numTickets = parseInt(SelectTicketQuantity, 10);
      if (!isNaN(numTickets) && numTickets > 0) {
        const selectedRange = [];
        for (let i = seatNumber; i < seatNumber + numTickets; i++) {
          if (!unavailableSeats.includes(i) && !selectedSeats.includes(i)) {
            selectedRange.push(i);
          } else {
            alert('Sequential seats are not available from this current seat. please select indivisual seats after doing unchecked the sequential mode');
            return;
          }
        }
        setSelectedSeats([...selectedSeats, ...selectedRange]);
      } else {
        alert('Please enter a valid number of tickets.');
        return;
      }
    } else {
      if (selectedSeats.includes(seatNumber)) {
        setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
      } else {
        setSelectedSeats([...selectedSeats, seatNumber]);
      }
    }
  };


  const handleTicketQuantity = (event) => {
    const newNumber = parseInt(event.target.value);
    setSelectTicketQuantity(newNumber);
  };



  const renderSeats = () => {
    const seats = [];
    for (let i = 1; i <= totalSeats; i++) {
      const isSelected = selectedSeats.includes(i);
      const isUnavailable = unavailableSeats.includes(i);
      const isBooked = proceedClicked && isSelected;
      seats.push(
        <div
          key={i}
          className={`seat ${isUnavailable ? 'unavailable' : ''} ${isSelected ? 'selected' : ''
            } ${isBooked ? 'booked' : ''}`}
          onClick={() => handleSeatClick(i)}
        >
          <PiOfficeChair />
        </div>
      );
    }
    return seats;
  };

  return (
    <div className="seat-booking">
      <div className="controls">
        <div className='controlTickQunt'>
          <label htmlFor="ticket_qunt">
            <select
              className="ticket_qunt"
              value={SelectTicketQuantity}
              onChange={handleTicketQuantity}
            >
              {ticketsNumbers.map((number) => (
                <option key={number} value={number}>
                  {number}
                </option>
              ))}
            </select>
            Tickets Quantity </label>
        </div>
        <div className='controlSequentialMode'>
          <label>
            <input
              className='check_box'
              type="checkbox"
              checked={sequentialMode}
              onChange={() => setSequentialMode(!sequentialMode)}
            />
            Sequential Seats Mode
          </label>
        </div>
      </div>
      <PremiumSeats />

      <div className='non-premium-name'>EXECUTIVE-RS. 450.00 470.00 </div>
      <hr />
      <div className="seats-layout">
        <div className="rows-name">
          <div className='row-label'>D</div>
          <div className='row-label'>E</div>
          <div className='row-label'>F</div>
          <div className='row-label'>G</div>
          <div className='row-label'>H</div>
          <div className='row-label'>I</div>
          <div className='row-label'>j</div>
        </div>
        <div className="seat-container">{renderSeats()}</div>
        <div className="non-premium-seats">
          {non_premium_seats.map((item, index) => (
            <div key={index} className="premium-seats-booked">
              <PiOfficeChair />

            </div>
          ))}
        </div>
      </div>
      <div className='non-premium-name'>NORMAL-RS. 430.00  </div>
      <hr />
      <div className="normal-seats">
        {normal_seats.map((item, index) => (
          <div key={index} className="normal-seats-booked">
            <PiOfficeChair />

          </div>
        ))}
      </div>
      <ProceedBooking setProceedClicked={setProceedClicked} selectedSeats={selectedSeats}
        SelectTicketQuantity={SelectTicketQuantity} unavailableSeats={unavailableSeats} />
    </div>
  );
};

export default SeatBooking;
