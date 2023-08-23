import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  GET_ONE_PRODUCT,
  GET_ALL_CMMENTS,
  ADD_CMMENTS,
  EDITE_CMMENTS,
} from '../Redux/types';
import { toast } from 'react-toastify';

type productType = {
  id: number;
  count: number;
  image: string[];
  img: string;
  name: string;
  price: string;
  rate: number;
  quantity: number;
};

export default function ProductDetailsLogic(id: string | undefined) {
  const dispatch = useDispatch();
  const { productReducer } = useSelector((state: any) => state);
  const { getOneProduct, getAllComments } = productReducer;
  //console.log(getAllComments);

  const [product, setProduct] = useState<productType | undefined>();
  const [rate, setRate] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [allComments, setAllComments] = useState<any[]>([]);
  const [editCurrentComment, setEditCurrentComment] = useState<any>({});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChangeRateValue = (value: number) => {
    setRate(value);
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleChangeComment = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    const comments = JSON.parse(localStorage.getItem('comments') || '[]');
    event.preventDefault();
    if (!name || !comment || !rate) {
      toast.error('Please fill all fields');
      return;
    }

    if (comments.find((el: any) => el.name === name && el.productId === id))
      return toast.warn('this name is already exist');

    comments.push({
      commentId: new Date(),
      productId: id,
      name,
      comment,
      rate,
    });
    const productComments = comments.filter((el: any) => el.productId === id);
    dispatch({ type: ADD_CMMENTS, payload: productComments });
    localStorage.setItem('comments', JSON.stringify(comments));
    setRate(0);
    setName('');
    setComment('');
  };

  useEffect(() => {
    dispatch({ type: GET_ONE_PRODUCT, payload: id });
  }, [dispatch, id]);

  useEffect(() => {
    if (getOneProduct.length) {
      setProduct(getOneProduct[0]);
    } else {
      setProduct(undefined);
    }
  }, [getOneProduct]);

  useEffect(() => {
    const comments = JSON.parse(localStorage.getItem('comments') || '[]');
    const productComments = comments.filter((el: any) => el.productId === id);
    //console.log(productComments);
    dispatch({ type: GET_ALL_CMMENTS, payload: productComments });
  }, [dispatch, id]);

  useEffect(() => {
    if (getAllComments.length) setAllComments(getAllComments);
    else setAllComments([]);
  }, [getAllComments]);

  const deleteComment = (index: number) => {
    const comments = JSON.parse(localStorage.getItem('comments') || '[]');
    comments.splice(index, 1);
    const productComments = comments.filter((el: any) => el.productId === id);
    dispatch({ type: ADD_CMMENTS, payload: productComments });
    localStorage.setItem('comments', JSON.stringify(comments));
  };

  const handleShoeEdit = (element: any, index: number) => {
    const comments = JSON.parse(localStorage.getItem('comments') || '[]');
    const [cuurentComment] = comments.filter(
      (el: any) => el.commentId === element.commentId
    );
    //console.log(comments[index]);
    if (!cuurentComment?.rate) return window.location.reload();
    setRate(cuurentComment?.rate);
    setName(cuurentComment?.name);
    setComment(cuurentComment?.comment);
    setEditCurrentComment(cuurentComment);
    handleShow();
  };

  const handleEditComment = (element: any, index: number) => {
    const comments = JSON.parse(localStorage.getItem('comments') || '[]');

    if (!name || !comment || !rate) {
      toast.error('Please fill all fields');
      return;
    }

    const getComment = comments.findIndex(
      (el: any) => el.commentId === editCurrentComment.commentId
    );
    const oldComment = comments[getComment];
    const newComment = {
      ...oldComment,
      name,
      comment,
      rate,
    };
    //console.log(comments);
    comments.splice(getComment, 1, newComment);
    const productComments = comments.filter((el: any) => el.productId === id);
    dispatch({ type: EDITE_CMMENTS, payload: productComments });
    localStorage.setItem('comments', JSON.stringify(comments));
    setRate(0);
    setName('');
    setComment('');
    setEditCurrentComment({});
    handleClose();
  };

  return {
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
  };
}
