import React from 'react';
import Button from 'react-bootstrap/Button';

export default function PostTemplate(props) {
  let templateClick = () => {
    props.applyPostTemplate(props.template);
  };

  let templateRemoveButton = e => {
    e.stopPropagation();
    props.removePostTemplate(props.template.uniqueId);
  };

  return (
    <Button variant="light" block className="mt-1" onClick={templateClick}>
      <div
        variant="danger"
        className="float-right m-1"
        onClick={templateRemoveButton}
      >
        X
      </div>
      {props.template.templateName}
    </Button>
  );
}
