import React from 'react';

function ErrorBanner(props) {
  if (!props.displayError) {
    return null;
  }

  return <div className="alert-danger">Incorrect login</div>;
}
export default ErrorBanner;
