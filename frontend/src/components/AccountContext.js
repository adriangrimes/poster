import React from 'react';

// stores various account details and settings
export const AccountContext = React.createContext({
  social: { username: 'DemoAccount', handle: '@khajiit' },
  accountSettings: {
    darkMode: false,
    twitterCredentials: '0123456789876543210'
  }
});
