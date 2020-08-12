import React from 'react';
import './burger.css';

const Burger = ({ open, setOpen }) => {
    return (
      <button className="burgerMenu"  onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </button>
    )
}

export default Burger;