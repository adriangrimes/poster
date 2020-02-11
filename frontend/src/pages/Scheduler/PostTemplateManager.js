import React from 'react';
import Button from 'react-bootstrap/Button';

export default function PostTemplateManager(props) {
  return (
    <div className="post-template-manager rounded p-2 m-2 text-light bg-secondary">
      <h2 className="text-center pt-2 pb-1">Your Templates</h2>
      <div className="post-template-wrapper">
        {!props.children.length && (
          <Button
            variant="light"
            disabled
            block
            className="template-instructions mt-1"
          >
            Add a template by giving it a name, and clicking the{' '}
            <strong>+</strong> next to the Post button
          </Button>
        )}
        {props.children}
      </div>
    </div>
  );
}
