import React from 'react';

export default function ErrorBanner(props) {
  if (!props.displayError) {
    return null;
  }

  return <div className="alert-danger">Incorrect login</div>;
}
