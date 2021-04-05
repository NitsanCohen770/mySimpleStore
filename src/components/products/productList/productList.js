import React from 'react';
import ProductItem from '../productItem/productItem';
import { Row } from 'react-bootstrap';

const ProductList = () => {
  return (
    <React.Fragment>
      <Row>
        <ProductItem
          title="All you need for Passover seder"
          description="Pillow, Towl, Aficoman cover and Matzos cover"
          img="https://cdn.shopify.com/s/files/1/0251/7473/6982/products/65500_90e86262-5679-4236-b1bc-bc1929d37a6b_1800x1800.jpg?v=1614539311"
          id="014412"
        ></ProductItem>
        <ProductItem
          title="Nice game for children"
          description="Very educational!"
          img="https://cdn.shopify.com/s/files/1/0251/7473/6982/products/IMG-20201209-WA0025_1800x1800.png?v=1607622569"
          id="011444"
        ></ProductItem>
        <ProductItem
          title="A set of books about the mossiach"
          description="3 books that will explain you everything you need to know abou the mossiach"
          img="https://cdn.shopify.com/s/files/1/0251/7473/6982/products/WhatsApp-Image-2019-12-25-at-7.37_640x640.png?v=1577280062"
          id="0132"
        ></ProductItem>
        <ProductItem
          title="CD Singing Tanya"
          description="Sing the Tanya and learn it by heart!"
          img="https://cdn.shopify.com/s/files/1/0251/7473/6982/products/WhatsApp_Image_2019-11-11_at_6.55.22_AM_1800x1800.jpg?v=1605716517"
          id="0112"
        ></ProductItem>
      </Row>
    </React.Fragment>
  );
};

export default ProductList;
