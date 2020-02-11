import React from 'react';
import { AccountContext } from './../contexts/AccountContext';

import MenuBar from './MenuBar';
import HeaderWithMenuButton from './HeaderWithMenuButton';

export default class DashboardLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };
  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    const isSmallScreen =
      window.innerWidth < process.env.REACT_APP_MENU_BREAKPOINT_PX;
    return (
      <div className="">
        <div className="app-wrapper mx-auto">
          <AccountContext.Consumer>
            {account => (
              <MenuBar
                isSmallScreen={isSmallScreen}
                closeMenu={this.closeMenu}
                menuOpen={this.state.menuOpen}
                social={account.social}
              >
                {this.props.menuBarExtras &&
                  this.props.menuBarExtras(this.closeMenu)}
              </MenuBar>
            )}
          </AccountContext.Consumer>
          <div
            className={`app-content p-0 ${isSmallScreen ? '' : 'border-right'}`}
          >
            <HeaderWithMenuButton
              isSmallScreen={isSmallScreen}
              toggleMenu={this.toggleMenu}
              contentHeader={this.props.contentHeader}
            />
            <main>{this.props.children}</main>
            <div className="py-5"></div>
          </div>
        </div>
      </div>
    );
  }
}
