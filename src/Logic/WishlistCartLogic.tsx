import { useEffect, useState } from 'react';
import { objType } from './ProductCartLogic';
import wishlist1 from '../images/wishlist1.png';
import wishlist2 from '../images/wishlist2.png';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_ONE_WISHLIST, GET_ALL_WISHLIST } from '../Redux/types';

export default function WishlistCartLogic(data: any) {
  const dispatch = useDispatch();
  const { productReducer } = useSelector((state: any) => state);
  const { wishlistUser } = productReducer;

  const [img, setImg] = useState<string>(wishlist1);
  const [allWishListItems, setAllWishListItems] = useState<objType[]>([]);

  const removeWishlistItem = (item: any) => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const wishListAfterDel = wishlist.filter((el: any) => el.id !== item.id);
    localStorage.setItem('wishlist', JSON.stringify(wishListAfterDel));

    setAllWishListItems(wishListAfterDel);
    dispatch({ type: DELETE_ONE_WISHLIST, payload: wishListAfterDel });
  };

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    dispatch({ type: GET_ALL_WISHLIST, payload: wishlist });
  }, [dispatch]);

  useEffect(() => {
    if (wishlistUser.find((el: objType) => el.id === data.id)) {
      setImg(wishlist1);
    } else {
      setImg(wishlist2);
    }
    setAllWishListItems(wishlistUser);
  }, [data, wishlistUser]);

  return { allWishListItems, img, removeWishlistItem };
}
