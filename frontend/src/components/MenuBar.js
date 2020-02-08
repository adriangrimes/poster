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
          src="avatar.jpg"
          height="50"
          width="50"
          className="avatar rounded-circle"
          alt="avatar"
        />
        <div className="twitter-handles p-1">
          <strong>{social.username}</strong>
          <div className="text-muted">{social.handle}</div>
        </div>
      </div>

      <nav>
        <ListGroup variant="flush">
          <NavLink to="/scheduler" className="text-decoration-none">
            <ListGroup.Item className="menu-bar-link border-top border-bottom">
              Scheduler
            </ListGroup.Item>
          </NavLink>
          <NavLink to="/settings" className="text-decoration-none">
            <ListGroup.Item className="menu-bar-link border-bottom">
              Account Settings
            </ListGroup.Item>
          </NavLink>
          <NavLink to="/help" className="text-decoration-none">
            <ListGroup.Item className="menu-bar-link border-bottom">
              Help
            </ListGroup.Item>
          </NavLink>
          <NavLink to="/" className="text-decoration-none">
            <ListGroup.Item className="menu-bar-link border-bottom">
              Log out
            </ListGroup.Item>
          </NavLink>
        </ListGroup>
      </nav>

      {children}
    </div>
  );
}
