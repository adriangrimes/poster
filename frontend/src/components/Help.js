import React, { useState } from 'react';
import MainLayout from './MainLayout';

import HelpTopics from './HelpTopics';

import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Help(props) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  let sendContactUsMessage = e => {
    e.preventDefault();
    console.log('send contact us message', email, message);
  };

  let handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'message') {
      setMessage(value);
    }
  };

  return (
    <MainLayout contentHeader="Help">
      <Button
        variant="light"
        className="d-flex align-items-center p-1 mb-2"
        onClick={() => window.history.back()}
      >
        <img
          src="assets/icons/exit.svg"
          alt=""
          height="25"
          width="25"
          className="d-inline mr-2"
        />
        Back
      </Button>
      <ListGroup className="mb-4">
        {HelpTopics.map((topic, index) => {
          return (
            <ListGroup.Item
              action
              className="pl-3 py-1 rounded border-0"
              href={'#topic' + (index + 1)}
              key={index}
              onClick={() =>
                window.history.replaceState(
                  undefined,
                  undefined,
                  '#topic' + (index + 1)
                )
              }
            >
              &#8226; <u>{topic.question}</u>
            </ListGroup.Item>
          );
        })}
        <ListGroup.Item
          action
          href="#contact-us"
          className="mt-2 pl-3 p-2 bg-gray rounded border-0"
        >
          <strong>
            <u>Still have questions? Contact us!</u>
          </strong>
        </ListGroup.Item>
      </ListGroup>
      <hr className="mb-4" />
      <div>
        {HelpTopics.map((topic, index) => {
          return (
            <div className="mb-4" key={index} id={'topic' + (index + 1)}>
              <h6>{topic.question}</h6>
              <p>{topic.answer}</p>
              {topic.answer2 && <p>{topic.answer2}</p>}
              {topic.answer3 && <p>{topic.answer3}</p>}
            </div>
          );
        })}
      </div>
      <hr className="mt-5" />
      <div className="p-1 p-sm-5">
        <h5 id="contact-us">Contact us</h5>
        <div>
          <Form onSubmit={sendContactUsMessage} className="p-2">
            <Form.Group controlId="formCaption" className="mb-2">
              <Form.Control
                name="email"
                type="text"
                placeholder="Email address"
                value={email}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formMessage" className="mb-2">
              <Form.Control
                name="message"
                type="text"
                as="textarea"
                rows="4"
                placeholder="What would you like to say?"
                value={message}
                onChange={handleInputChange}
              />
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button variant="primary" type="submit" className="rounded-pill">
                Send message
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </MainLayout>
  );
}
