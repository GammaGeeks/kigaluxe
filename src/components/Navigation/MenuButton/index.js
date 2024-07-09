import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './index.scss'; // Create this file for custom styles

const MenuButton = () => {
  return (
    <div className="menu-button-container">
      <button className="menu-button">
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
};

export default MenuButton;