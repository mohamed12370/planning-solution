import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';

interface rateProps {
  rate: number;
  name: string;
  comment: string;
  handleChangeRateValue: (newValue: number) => void;
  handleChangeName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeComment: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ProductRatePost({
  rate,
  name,
  comment,
  handleChangeRateValue,
  handleChangeName,
  handleChangeComment,
  handleSubmit,
}: rateProps) {
  const setting = {
    size: 20,
    count: 5,
    color: '#979797',
    activeColor: '#ffc107',
    value: rate,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue: number) => {
      //console.log(newValue);
      handleChangeRateValue(newValue);
    },
  };

  return (
    <Container className="border-bottom mt-3">
      <Row className="">
        <h5 className="text-end"> add comment </h5>
        <Col sm="12" className="d-flex justify-content-end align-items-center">
          <ReactStars {...setting} />
        </Col>
        <Col xs="12" className="">
          <input
            className="p-2 d-block ms-auto w-75"
            placeholder="enter y name"
            value={name}
            onChange={handleChangeName}
          />
          <textarea
            className="p-2 d-block ms-auto w-75 my-1"
            cols={30}
            placeholder="add comment..."
            value={comment}
            onChange={handleChangeComment}
          />
          <button
            className="btn btn-outline-danger ms-auto py-2 d-block w-75"
            onClick={handleSubmit}
          >
            add
          </button>
        </Col>
      </Row>
    </Container>
  );
}
