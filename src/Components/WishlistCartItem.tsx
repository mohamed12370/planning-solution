import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import star from '../images/start.png';
import { ProductProps } from '../Logic/ProductCartLogic';
import WishlistCartLogic from '../Logic/WishlistCartLogic';

const WishlistCartItem = ({ data }: ProductProps) => {
  const { img, removeWishlistItem } = WishlistCartLogic(data);

  return (
    <Col sm="12" md="6" lg="4" className="mb-3">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={data?.img} height={200} />
        <Card.Body>
          <Card.Title>
            <span>{data?.name || ''}</span>
          </Card.Title>
          <Card.Text>
            price: <span>{data?.price || 0}</span>
          </Card.Text>
          <Card.Text>
            ratings:{' '}
            <span>
              {data?.rate || 0} <img src={star} alt="" width="20" height="20" />
            </span>
          </Card.Text>
          <Card.Text className="d-flex justify-content-between align-items-center">
            <Link
              to={`/product-details/${data.id}`}
              className="text-danger text-decoration-none"
            >
              Details
            </Link>
            <span onClick={() => removeWishlistItem(data)}>
              <img
                src={img}
                alt=""
                width="30"
                height="30"
                style={{ cursor: 'pointer' }}
              />
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default WishlistCartItem;
