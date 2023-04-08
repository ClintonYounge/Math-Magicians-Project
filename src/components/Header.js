/* eslint-disable react/button-has-type */
import React from 'react';

import '../App.css';

function Header() {
  return (
    <ul className="navBar">
      <li><button>Home</button></li>
      <li><button>Show Quote</button></li>
    </ul>
  );
}

export default Header;
