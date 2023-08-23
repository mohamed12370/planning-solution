import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function ProductSlider({ images }: { images: string[] }) {
  return (
    <Carousel>
      {images?.map((el, index) => (
        <Carousel.Item key={index}>
          <img src={`${el}`} alt="" className="w-100" height={400} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
