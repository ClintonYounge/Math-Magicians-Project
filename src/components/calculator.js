import React from 'react';

const Calculator = () => (
  <main>
    <div className="show-calculations">
      <p>0</p>
    </div>
    <div className="input-rows">
      <ul className="inputRow-1">
        <li>AC</li>
        <li>+/-</li>
        <li>%</li>
        <li className="orangeBG">+</li>
      </ul>
      <ul className="inputRow-2">
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li className="orangeBG">X</li>
      </ul>
      <ul className="inputRow-3">
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li className="orangeBG">-</li>
      </ul>
      <ul className="inputRow-4">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li className="orangeBG">+</li>
      </ul>
      <ul className="inputRow-5">
        <li className="R5-li1">0</li>
        <li className="R5-li2">.</li>
        <li className="orangeBG R5-li3">=</li>
      </ul>
    </div>
  </main>
);

export default Calculator;
