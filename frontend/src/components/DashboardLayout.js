import React from 'react';
import { AccountContext } from './AccountContext';

import MenuBar from './MenuBar';
import ContentHeader from './ContentHeader';

export default class DashboardLayout extends React.Component {
  constructor(props) {
    super(props);
    this.menuBarRef = React.createRef();
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
      <div className="app-wrapper mx-auto">
        <AccountContext.Consumer>
          {account => (
            <MenuBar
              isSmallScreen={isSmallScreen}
              closeMenu={this.closeMenu}
              menuOpen={this.state.menuOpen}
              social={account.social}
            >
              {this.props.menuBarExtras}
            </MenuBar>
          )}
        </AccountContext.Consumer>
        <div className="app-content p-0">
          <ContentHeader
            isSmallScreen={isSmallScreen}
            toggleMenu={this.toggleMenu}
            contentHeader={this.props.contentHeader}
          />
          <div className={isSmallScreen ? '' : 'border-right'}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
