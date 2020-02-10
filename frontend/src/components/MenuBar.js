import React from 'react';

import NavLink from './NavLink';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

export default function MenuBar({
  isSmallScreen,
  menuOpen,
  closeMenu,
  social,
  children
}) {
  return (
    <div
      id="menu-bar"
      className={`menu-bar border-right ${menuOpen ? 'active' : ''}`}
    >
      {isSmallScreen && (
        <Button
          variant="default"
          size="lg"
          className="close-menu-button p-1 m-2"
          onClick={closeMenu}
        >
          ✕
        </Button>
      )}

      <div className="d-flex m-2 ">
        <img
          src="uploads/avatar.jpg"
          height="50"
          width="50"
          className="avatar rounded-circle"
          alt="Your avatar"
        />
        <div className="twitter-handles p-1">
          <strong>{social.username}</strong>
          <div className="text-muted">{social.handle}</div>
        </div>
      </div>

      <nav className="my-sm-4">
        <ListGroup variant="flush">
          <NavLink to="/scheduler" className="text-decoration-none">
            <ListGroup.Item className="menu-bar-link d-flex align-items-center rounded-left">
              <img
                src="assets/icons/logo.svg"
                alt=""
                height="25"
                width="25"
                className="d-inline mr-3"
              />
              <span>Scheduler</span>
            </ListGroup.Item>
          </NavLink>
          <NavLink to="/settings" className="text-decoration-none">
            <ListGroup.Item className="menu-bar-link d-flex align-items-center rounded-left">
              <img
                src="assets/icons/settings.svg"
                alt=""
                height="25"
                width="25"
                className="d-inline mr-3"
              />
              <span>Account Settings</span>
            </ListGroup.Item>
          </NavLink>
          <NavLink to="/help" className="text-decoration-none">
            <ListGroup.Item className="menu-bar-link d-flex align-items-center rounded-left">
              <img
                src="assets/icons/help.svg"
                alt=""
                height="25"
                width="25"
                className="d-inline mr-3"
              />
              <span>Help</span>
            </ListGroup.Item>
          </NavLink>
          <NavLink to="/" className="text-decoration-none">
            <ListGroup.Item className="menu-bar-link d-flex align-items-center rounded-left">
              <img
                src="assets/icons/exit.svg"
                alt=""
                height="25"
                width="25"
                className="d-inline mr-3"
              />
              <span>Log out</span>
            </ListGroup.Item>
          </NavLink>
        </ListGroup>
      </nav>

      {children}
    </div>
  );
}
