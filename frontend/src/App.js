import React from 'react';
import { Router } from '@reach/router';
import { ScrollToTop } from './components/ScrollToTop';

import Home from './components/Home';
import Scheduler from './components/Scheduler';
import AccountSettings from './components/AccountSettings';
import Help from './components/Help';
import NotFound from './components/NotFound';
import ScrollToTopButton from './components/ScrollToTopButton';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Router primary={true}>
          <ScrollToTop path="/">
            <Home path="/" />
            <Help path="help" />

            {/* Account routes */}
            <Scheduler path="scheduler" />
            <AccountSettings path="settings" />

            {/* 404 */}
            <NotFound default />
          </ScrollToTop>
        </Router>
        <ScrollToTopButton />
      </>
    );
  }
}
