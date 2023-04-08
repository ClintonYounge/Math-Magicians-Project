/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import Quote from './Quote';
import '../App.css';

function QuoteButton() {
  const [showQuote, setShowQuote] = useState(false);

  const handleClick = () => {
    setShowQuote(true);
  };

  return (
    <div>
      <ul className="navBar">
        <li><button className="home-btn">Home</button></li>
        <li><button className="show-quote" onClick={handleClick}>Show Quote</button></li>
      </ul>
      {showQuote && <Quote />}
    </div>
  );
}

export default QuoteButton;
