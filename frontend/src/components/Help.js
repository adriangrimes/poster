import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Help(props) {
  let helpTopics = [
    {
      question: 'Why should I use Poster?',
      answer:
        "Poster is a simple social media scheduler with tools designed to help you grow your business. Keeping up an effective social media account can take hours every day we just can't spare. Scheduling posts ahead of time saves time, and helps create a more cohesive social presence."
    },
    {
      question: 'How do I sign up?',
      answer:
        'Just visit demo.solversion.com, click "Sign Up" and enter your email and password. We will only send you emails to verify your email address and with important information about your account.'
    },
    {
      question: 'What social networks can I connect to?',
      answer: 'At the moment you can connect to your twitter account.'
    },
    {
      question: 'How do I schedule a post?',
      answer:
        'At the top of your dashboard there is a scheduled posts form. Fill out your caption and hashtags, these will be combined into the tweet when it is posted. Add images if desired, then select the post date and time. Click "Schedule!" to save the scheduled post.',
      answer2:
        'You can delete a scheduled post by clicking the X in the upper right corner of the post.'
    },
    {
      question: 'How do I make a template?',
      answer:
        'On your dashboard Write out your template caption and hashtags in the Scheduled Posts section. Instead of scheduling a time, enter a name for your template next to the plus button at the bottom of the form. Click the plus button to add the template to your side bar for easy future use.'
    },
    {
      question: 'How do I use a template?',
      answer:
        'On your dashboard any templates you have saved will appear in the side bar on the left of the screen on desktop. On mobile use the menu button at the top of the screen to open the menu-bar.',
      answer2:
        'Click the template name you would like  to use, and the information will automatically fill in the scheduled post form for you to finalize and schedule the post. You can delete a template by clicking the X next to the template name in the menu-bar.'
    },
    {
      question: 'Do I have to include hashtags?',
      answer:
        'Nope. It is recommended to use a couple hashtags so that others can find your posts, but the choice is yours!'
    }
  ];

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

    console.log('input');
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'message') {
      setMessage(value);
    }
  };

  return (
    <>
      <div className="p-3">
        {helpTopics.map((topic, index) => {
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
      <div className="p-4">
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
    </>
  );
}
