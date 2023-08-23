import React, { useState, useEffect, useCallback } from 'react';
import { Container, Row } from 'react-bootstrap';
import ProductCartItem from '../Components/ProductCartItem';
import { objType } from '../Logic/ProductCartLogic';
import PaginationApp from '../Components/Pagination';
import { useSelector } from 'react-redux';

export default function HomePage() {
  const { productReducer } = useSelector((state: any) => state);
  const { allProducts } = productReducer;

  const [productList, setProductList] = useState<objType[]>([]);
  const [pageCount, setPageCount] = useState<number>(0);

  const getPagination = useCallback(
    (page: number = 1) => {
      const skip = page === 1 ? 6 : 11;
      const start = (page - 1) * 6;
      const newData = allProducts.slice(start, skip);
      setPageCount(Math.ceil(allProducts.length / 6));
      setProductList(newData);
    },
    [allProducts]
  );

  useEffect(() => {
    getPagination();
  }, [getPagination]);

  return (
    <Container className="py-3">
      <Row>
        {productList.length ? (
          productList.map((item, index) => {
            return <ProductCartItem key={index} data={item} />;
          })
        ) : (
          <h3>No Product Here</h3>
        )}
      </Row>

      <Row className="mt-3">
        {pageCount > 1 ? (
          <PaginationApp pageCount={pageCount} onPress={getPagination} />
        ) : null}
      </Row>
    </Container>
  );
}
