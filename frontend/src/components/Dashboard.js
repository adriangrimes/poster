import React from 'react';
import { navigate } from '@reach/router';

let Dashboard = () => (
  <>
    <div>Dashboard</div>
    <div>
      <button
        onClick={function() {
          navigate(`/`);
        }}
      >
        Log out
      </button>
    </div>
  </>
);

export default Dashboard;
