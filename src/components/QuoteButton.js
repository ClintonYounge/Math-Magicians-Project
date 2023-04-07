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
      <button className="show-quote" onClick={handleClick}>Click to see the Quote of the session.</button>
      {showQuote && <Quote />}
    </div>
  );
}

export default QuoteButton;
