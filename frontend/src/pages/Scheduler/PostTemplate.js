import React from 'react';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function PostTemplate(props) {
  let templateClick = () => {
    props.applyPostTemplate(props.template);
    props.closeMenu();
  };

  let templateRemoveButton = e => {
    e.stopPropagation();
    props.removePostTemplate(props.template.uniqueId);
  };

  return (
    <ButtonGroup
      aria-label={`Post template: ${props.template.templateName}`}
      className="mt-1 w-100"
    >
      <Button
        variant="light"
        className="bg-white w-100 text-left"
        onClick={templateClick}
      >
        {props.template.templateName}
      </Button>
      <Button
        variant="default"
        className="bg-light"
        aria-label={`Remove Post template: ${props.template.templateName}`}
        onClick={templateRemoveButton}
      >
        <strong>✕</strong>
      </Button>
    </ButtonGroup>
  );
}
