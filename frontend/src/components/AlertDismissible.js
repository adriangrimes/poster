import React from 'react';
import Alert from 'react-bootstrap/Alert';

export default function AlertDismissible(props) {
  return (
    <>
      <Alert
        show={props.show}
        variant={props.variant}
        onClose={props.handleClose}
        dismissible
      >
        {props.heading && <Alert.Heading>{props.heading}</Alert.Heading>}
        {props.message && <p className="m-0">{props.message}</p>}
      </Alert>
    </>
  );
}
