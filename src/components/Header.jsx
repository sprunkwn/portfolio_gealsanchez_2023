/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/header.css';

export const Header = () => {
  const [show, setShow] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const [subjectValue, setSubjectValue] = useState('');
  const [look, setLook] = useState(false);
  const [message, setMessage] = useState('');

  const handleGo = () => setLook(false);
  const handleLook = () => setLook(true);

  const handleReset = () => {
    setSubjectValue('');
    setEmailValue('');
  };

  const handleClose = () => {
    setShow(false);
    handleReset();
  };

  const handleShow = () => setShow(true);
  const handleClick = () => {
    const content = { emailValue, subjectValue };
    emailjs.send('service_b8fov3c', 'template_xkaa9ue', content, 'c3RthNeKMaL_W7Y1S')
      .then((result) => {
        let alert = result.text;
        alert = ' Thanks for your message';
        setMessage(alert);
        handleLook();
      }, (error) => {
        let alertwo = error.text;
        alertwo += 'There is an error, please try again';
        setMessage(alertwo);
        handleLook();
      });
    handleReset();
    handleClose();
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand to="/">Gerson Sanchez</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavLink to="/" id="router-link" end>Home</NavLink>
              <NavLink to="/products" id="router-link">Projects</NavLink>
              <NavLink to="/" onClick={() => handleShow()} id="router-link">Contact</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please leave a comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={emailValue}
                onChange={(event) => setEmailValue(event.target.value)}
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              value={subjectValue}
              onChange={(event) => setSubjectValue(event.target.value)}
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={look} onHide={handleGo}>
        <Modal.Header closeButton>
          <Modal.Title>Gerson Sanchez</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {message}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleGo}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
