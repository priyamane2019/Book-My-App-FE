import React from 'react';
import './App.css';
import SeatBooking from './components/SeatBooking';
import DateTime from "./components/DateTime";


function App() {
  return (
    <div className="App">
      <div className="header">
        <div className='address'>
          Cinepolis: Nexus Shantiniketan | Saturday, 12 Sep, 06:55 PM
        </div>
        <div className='time'><DateTime /></div>
      </div><br/>
      <SeatBooking />
    </div>
  );
}

export default App;