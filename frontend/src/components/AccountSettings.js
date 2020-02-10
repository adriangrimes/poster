import React from 'react';
import DashboardLayout from './DashboardLayout';

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
          <Form.Group controlId="formTwitterAuthentication">
            <Form.Label>Twitter Authentication</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Twitter authentication"
              disabled
            />
          </Form.Group>
          <Form.Group controlId="formConfirmTwitterAuthentication">
            <Form.Control
              type="password"
              placeholder="Confirm Twitter authentication"
              disabled
            />
          </Form.Group>
        </Form>
        <hr />
        <Form>
          <Form.Group controlId="formNewEmail">
            <Form.Label>Change email address</Form.Label>
            <Form.Control type="email" placeholder="Enter new email" disabled />
          </Form.Group>
          <Form.Group controlId="formConfirmNewEmail">
            <Form.Control type="email" placeholder="Confirm email" disabled />
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
              disabled
            />
          </Form.Group>
          <Form.Group controlId="formConfirmNewPassword">
            <Form.Control
              type="password"
              placeholder="Confirm password"
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
