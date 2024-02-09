// DropdownMenu component
import React from 'react';

const DropdownMenu = ({ options, isActive }) => {
  return (
    <div className={`dropdown-menu ${isActive ? 'active' : ''}`}>
      <ul>
        {options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
