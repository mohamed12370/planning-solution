import React, { useState, useEffect } from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { GET_SERECH_PRODUCTS, GET_ALL_PRODUCTS } from '../Redux/types';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [word, setWord] = useState<string>('');

  const hnadleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setWord(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    navigate('/');
    dispatch({ type: GET_SERECH_PRODUCTS, payload: word });
  };

  useEffect(() => {
    if (word === '') {
      dispatch({ type: GET_ALL_PRODUCTS });
    }
  }, [dispatch, word]);

  return (
    <Navbar expand="lg" className="bg-body-tertiary py-3">
      <Container>
        <Link
          to={`/`}
          className="text-decoration-none text-bg-danger p-2 rounded-3 fs-6"
        >
          Planing Solutions
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto ms-5 my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link
              to={`/wishlist`}
              className="text-decoration-none text-black-50"
            >
              WishList
            </Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={hnadleChange}
            />
            <Button variant="outline-success" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
