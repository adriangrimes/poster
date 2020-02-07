import React from 'react';

export const AccountContext = React.createContext({
  social: { username: 'DemoAccount', handle: '@khajiittraveler' },
  accountSettings: {
    darkMode: false,
    twitterCredentials: '0123456789876543210'
  }
});
