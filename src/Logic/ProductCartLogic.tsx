import { useState, useEffect } from 'react';
import wishlist1 from '../images/wishlist1.png';
import wishlist2 from '../images/wishlist2.png';
import { useDispatch, useSelector } from 'react-redux';
import { GET_ALL_WISHLIST } from '../Redux/types';

export interface ProductProps {
  data: {
    id?: number;
    name?: string;
    price?: string;
    count?: number;
    img?: string;
    image?: string[];
    rate?: number;
    quantity?: number;
  };
}

export interface objType {
  id?: number;
  name?: string;
  price?: string;
  count?: number;
  img?: string;
  image?: string[];
  rate?: number;
  quantity?: number;
}

const ProductCartLogic = (data?: objType) => {
  const dispatch = useDispatch();
  const { productReducer } = useSelector((state: any) => state);
  const { wishlistUser } = productReducer;

  const [img, setImg] = useState<string>(wishlist1);
  const [allWishListItems, setAllWishListItems] = useState<objType[]>([]);

  const addToWishList = (obj: objType): void => {
    const wishList: objType[] = JSON.parse(
      localStorage.getItem('wishlist') || '[]'
    );
    if (!wishList.find((el: objType) => el.id === obj.id)) {
      wishList.push(obj);
      localStorage.setItem('wishlist', JSON.stringify(wishList));
      setImg(wishlist1);
    } else {
      const wishListAfterRemoveItem: objType[] = wishList.filter(
        (el: objType) => el.id !== obj.id
      );
      localStorage.setItem('wishlist', JSON.stringify(wishListAfterRemoveItem));
      setImg(wishlist2);
    }
  };

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    dispatch({ type: GET_ALL_WISHLIST, payload: wishlist });
  }, [dispatch]);

  useEffect(() => {
    if (wishlistUser.find((el: objType) => el.id === data?.id)) {
      setImg(wishlist1);
    } else {
      setImg(wishlist2);
    }
    setAllWishListItems(wishlistUser);
  }, [data, wishlistUser]);

  return {
    img,
    addToWishList,
    allWishListItems,
    wishlistUser,
  };
};

export default ProductCartLogic;
