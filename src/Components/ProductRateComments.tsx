import React from 'react';
import star from '../images/start.png';
import { Button, Modal } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';

type commentProps = {
  comments: any[];
  deleteComment: (index: number) => void;
  rate: number;
  name: string;
  commentText: string;
  handleChangeRateValue: (newValue: number) => void;
  handleChangeName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeComment: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit?: (element: any) => void;
  show: boolean;
  handleClose: () => void;
  handleShoeEdit: (element: any, i?: any) => void;
  handleEditComment: (element?: any, i?: any) => void;
};

export default function ProductRateComments({
  comments,
  deleteComment,
  rate,
  name,
  commentText,
  handleChangeRateValue,
  handleChangeName,
  handleChangeComment,
  show,
  handleClose,
  handleShoeEdit,
  handleEditComment,
}: commentProps) {
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
    <div className="mt-5">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <div className="font">Edit Comment </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-end">
            <ReactStars {...setting} />
          </div>

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
            value={commentText}
            onChange={handleChangeComment}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button className="font" variant="dark" onClick={handleClose}>
            Close
          </Button>
          <Button
            className="font"
            variant="success"
            onClick={handleEditComment}
          >
            Edit Comment
          </Button>
        </Modal.Footer>
      </Modal>

      {comments.map((comment, i) => (
        <div key={i} className="bg-dark-subtle px-2 py-1 mb-2">
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <span>{comment.name}:</span>
              <span className="ms-2 text-light text-bg-danger px-2 rounded-1">
                {comment.rate}
              </span>
              <img
                className="rounded-pill my-2"
                src={star}
                alt=""
                width="22"
                height="22"
              />{' '}
            </div>
            <div className="d-flex align-items-center">
              <i
                className="fas fa-edit me-2"
                style={{ cursor: 'pointer' }}
                onClick={() => handleShoeEdit(comment, i)}
              ></i>
              <i
                className="fa-solid fa-trash"
                style={{ cursor: 'pointer' }}
                onClick={() => deleteComment(i)}
              ></i>
            </div>
          </div>
          <p>{comment.comment}</p>
        </div>
      ))}
    </div>
  );
}
