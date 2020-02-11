import React from 'react';

import HeaderWithMenuButton from './HeaderWithMenuButton';

export default function MainLayout(props) {
  return (
    <div className="faded-branded-gradient">
      <div className="main-content mx-auto p-0">
        <HeaderWithMenuButton contentHeader={props.contentHeader} />
        <div className="p-3">{props.children}</div>
        <div className="py-5"></div>
      </div>
    </div>
  );
}
