import React from 'react';
import { Link } from '@reach/router';

import Button from 'react-bootstrap/Button';

export default function MenuBar({
  isSmallScreen,
  menuOpen,
  closeMenu,
  social,
  children
}) {
  return (
    <nav
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

      <div className="d-flex">
        <img
          src="avatar.jpg"
          height="50"
          width="50"
          className="avatar rounded-circle"
          alt="avatar"
        />
        <div className="twitter-handles mb-4 p-1">
          <strong>{social.username}</strong>
          <div className="text-muted">{social.handle}</div>
        </div>
      </div>

      <ul className="list-unstyled mb-5">
        <li className="border-top border-bottom">
          <Link to="/scheduler">Scheduler</Link>
        </li>
        <li className="border-bottom">
          <Link to="/help">Help</Link>
        </li>
        <li className="border-bottom">
          <Link to="/settings">Account Settings</Link>
        </li>
        <li className="border-bottom">
          <Link to="/">Log out</Link>
        </li>
      </ul>
      {children}
    </nav>
  );
}
