import React from 'react';

import Button from 'react-bootstrap/Button';

export default function HeaderWithMenuButton({
  isSmallScreen,
  toggleMenu,
  contentHeader
}) {
  return (
    <div className="d-flex align-items-center justify-content-start branded-gradient text-light m-0">
      {isSmallScreen && (
        <Button
          className="menu-button d-flex justify-content-center align-items-center p-3 border-0"
          onClick={toggleMenu}
        >
          <img
            className="menu-button-image"
            src="assets/icons/menuicon.svg"
            alt="Toggle menu"
          />
        </Button>
      )}
      <h5 className="m-0 pl-3 py-3">{contentHeader}</h5>
    </div>
  );
}
