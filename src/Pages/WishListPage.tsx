import { Container, Row } from 'react-bootstrap';
import WishlistCartItem from '../Components/WishlistCartItem';
import ProductCartLogic from '../Logic/ProductCartLogic';

const WishListPage = () => {
  const { allWishListItems } = ProductCartLogic();

  return (
    <Container className="py-3">
      <Row>
        {allWishListItems.length ? (
          allWishListItems.map((item: any, index: number) => {
            return <WishlistCartItem key={index} data={item} />;
          })
        ) : (
          <h3> There are no products </h3>
        )}
      </Row>
    </Container>
  );
};

export default WishListPage;
