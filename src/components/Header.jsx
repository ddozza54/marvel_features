import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/marvel_full.png';

export default function Header() {
  return (
    <div className="flex items-center space-x-5 w-full">
      <h1>Fetured</h1>
      <Link to="/">
        <img src={logo} alt="MARVLE" />
      </Link>
      <h1>Characters</h1>
    </div>
  );
}
