import React from 'react';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import ProductSlider from '../Components/ProductSlider';
import ProductText from '../Components/ProductText';
import ProductDetailsLogic from '../Logic/ProductDetailsLogic';
import ProductRatePost from '../Components/ProductRatePost';
import { ToastContainer } from 'react-toastify';
import ProductRateComments from '../Components/ProductRateComments';

export default function ProductDetailsPage() {
  const { id } = useParams();
  const {
    rate,
    name,
    comment,
    product,
    allComments,
    handleChangeRateValue,
    handleChangeName,
    handleChangeComment,
    handleSubmit,
    deleteComment,
    show,
    handleClose,
    handleShoeEdit,
    handleEditComment,
  } = ProductDetailsLogic(id);

  return (
    <div className="py-3 bg-light-subtle">
      <Container>
        <Row>
          {product ? (
            <>
              <Col md="6">
                <ProductSlider images={product.image} />
              </Col>
              <Col md="6">
                <ProductText product={product} />
              </Col>
              <Col sm="12">
                <ProductRatePost
                  rate={rate}
                  name={name}
                  comment={comment}
                  handleChangeRateValue={handleChangeRateValue}
                  handleChangeName={handleChangeName}
                  handleChangeComment={handleChangeComment}
                  handleSubmit={handleSubmit}
                />
              </Col>
              <Col sm="12">
                <ProductRateComments
                  comments={allComments}
                  deleteComment={deleteComment}
                  rate={rate}
                  name={name}
                  commentText={comment}
                  handleChangeRateValue={handleChangeRateValue}
                  handleChangeName={handleChangeName}
                  handleChangeComment={handleChangeComment}
                  show={show}
                  handleClose={handleClose}
                  handleShoeEdit={handleShoeEdit}
                  handleEditComment={handleEditComment}
                />
              </Col>
            </>
          ) : (
            <h6>There is no product for this id {id}</h6>
          )}
        </Row>
      </Container>
      <ToastContainer />
    </div>
  );
}
