import React from 'react';
import DashboardLayout from './../../layouts/DashboardLayout';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function AccountSettings(props) {
  const saveChanges = () => {
    console.log('save account settings');
  };

  return (
    <DashboardLayout contentHeader="Account settings">
      <div className="p-3">
        <Form>
          <Form.Group controlId="formChangeTwitterAuthentication">
            <Form.Label>Twitter Authentication</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Twitter authentication"
              aria-label="Enter twitter authentication"
              disabled
            />
          </Form.Group>
          <Form.Group controlId="formConfirmTwitterAuthentication">
            <Form.Control
              type="password"
              placeholder="Confirm Twitter authentication"
              aria-label="Confirm twitter authentication"
              disabled
            />
          </Form.Group>
        </Form>
        <hr />
        <Form>
          <Form.Group controlId="formChangeEmail">
            <Form.Label>Change email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter new email"
              aria-label="Enter new email"
              disabled
            />
          </Form.Group>
          <Form.Group controlId="formConfirmNewEmail">
            <Form.Control
              type="email"
              placeholder="Confirm email"
              aria-label="Confirm new email"
              disabled
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        </Form>
        <hr />
        <Form>
          <Form.Group controlId="formNewPassword">
            <Form.Label>Change password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter new password"
              aria-label="Enter new password"
              disabled
            />
          </Form.Group>
          <Form.Group controlId="formConfirmNewPassword">
            <Form.Control
              type="password"
              placeholder="Confirm password"
              aria-label="Confirm new password"
              disabled
            />
          </Form.Group>
        </Form>
        <div className="d-flex justify-content-end">
          <Button
            variant="primary"
            className="rounded-pill "
            onClick={saveChanges}
            disabled
          >
            Save Changes
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
