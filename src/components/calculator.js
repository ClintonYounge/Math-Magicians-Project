// src/components/calculator.js

import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import calculate from '../logic/calculate';

function Calculate() {
  const [state, setState] = useState({ total: null, next: null, operation: null });

  const handleClick = (buttonName) => {
    setState(calculate(state, buttonName));
  };

  return (
    <div className="calculator">
      <h1>Lets do some math</h1>
      <div className="main">
        <div id="show-calculations" data-testid="outputResult"><Display value={state.next || state.total || '0'} /></div>
        <div className="input-rows">
          <ul className="inputRow-1">
            <li><Button clickHandler={handleClick} name="AC" /></li>
            <li><Button clickHandler={handleClick} name="+/-" /></li>
            <li><Button clickHandler={handleClick} name="%" /></li>
            <li className="orangeBG"><Button clickHandler={handleClick} name="÷" orange /></li>
          </ul>
          <ul className="inputRow-2">
            <li><Button clickHandler={handleClick} name="7" /></li>
            <li><Button clickHandler={handleClick} name="8" /></li>
            <li><Button clickHandler={handleClick} name="9" /></li>
            <li className="orangeBG"><Button clickHandler={handleClick} name="x" /></li>
          </ul>
          <ul className="inputRow-3">
            <li><Button clickHandler={handleClick} name="4" /></li>
            <li><Button clickHandler={handleClick} name="5" /></li>
            <li><Button clickHandler={handleClick} name="6" /></li>
            <li className="orangeBG"><Button clickHandler={handleClick} name="-" /></li>
          </ul>
          <ul className="inputRow-4">
            <li><Button clickHandler={handleClick} name="1" /></li>
            <li><Button clickHandler={handleClick} name="2" /></li>
            <li><Button clickHandler={handleClick} name="3" /></li>
            <li className="orangeBG"><Button clickHandler={handleClick} name="+" /></li>
          </ul>
          <ul className="inputRow-5">
            <li className="R5-li1"><Button clickHandler={handleClick} name="0" wide /></li>
            <li className="R5-li2"><Button clickHandler={handleClick} name="." /></li>
            <li className="orangeBG R5-li3"><Button clickHandler={handleClick} name="=" orange /></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Calculate;
