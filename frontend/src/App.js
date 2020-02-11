import React from 'react';
import { Router } from '@reach/router';
import { ScrollToTop } from './helpers/ScrollToTop';

import Home from './pages/Home';
import Scheduler from './pages/Scheduler';
import AccountSettings from './pages/AccountSettings';
import Help from './pages/Help';
import NotFound from './pages/NotFound';
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
