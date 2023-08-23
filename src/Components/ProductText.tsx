import React from 'react';
import { Col, Row } from 'react-bootstrap';
import star from '../images/start.png';

type productTextType = {
  product?: {
    id: number;
    count: number;
    image: string[];
    img: string;
    name: string;
    price: string;
    rate: number;
    quantity: number;
  };
};

export default function ProductText({ product }: productTextType) {
  return (
    <Row>
      <Col sm="12">
        <span className="fw-bolder">Name: </span> {product?.name}
      </Col>
      <Col sm="12" className="my-3">
        <span className="fw-bolder"> Description: </span>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </Col>
      <Col sm="12">
        <span className="fw-bolder"> Price: </span>
        {product?.price}
      </Col>
      <Col sm="12" className="d-flex align-items-center">
        <span className="fw-bolder"> Rate: </span>
        {product?.rate}{' '}
        <img
          className="rounded-pill my-2"
          src={star}
          alt=""
          width="22"
          height="22"
        />
      </Col>
      <Col sm="12" className="">
        <span className="fw-bolder"> Store: </span>
        {product?.count}
      </Col>
    </Row>
  );
}
