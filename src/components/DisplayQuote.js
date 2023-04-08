import React, { useState } from 'react';
import QuoteData from './QuoteData';
import '../App.css';

function QuoteButton() {
  const [showQuote, setShowQuote] = useState(false);

  const handleClick = () => {
    setShowQuote(true);
  };

  return (
    <div>
      <button type="button" className="show-quote" onClick={handleClick}>Click to see the Quote of the session.</button>
      {showQuote && <QuoteData />}
    </div>
  );
}

export default QuoteButton;
