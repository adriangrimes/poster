import React from 'react';
import Button from 'react-bootstrap/Button';

export default function TemplateManager(props) {
  let children = (
    <Button
      variant="light"
      disabled
      block
      className="template-add-instructions mt-1"
    >
      Add a template by clicking the + next to the Post button
    </Button>
  );
  if (props.children.length) children = props.children;

  return (
    <div className="rounded p-2 bg-secondary">
      <h6 className="text-center text-light pt-2 pb-1">Your post templates</h6>
      <div>{children}</div>
    </div>
  );
}
