import React from "react";
import products from "../assets/fake-data/products";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import productImg from "../assets/images/product_01.1.jpg";
import "../styles/products-details.css";
import "../styles/product-card.css"
const FoodDetails = () => {
  return (
    <Helmet title="Product-details">
      <CommonSection title="product 01" />
      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="product__images">
                <div className="img__item">
                  <img src={productImg} alt="" className="w-50" />
                </div>

                <div className="img__item">
                  <img src={productImg} alt="" className="w-50" />
                </div>

                <div className="img__item">
                  <img src={productImg} alt="" className="w-50" />
                </div>
              </div>
            </Col>
            <Col lg="4" md="4">
              <div className="product__main-img">
                <img src={productImg} alt="" className="w-100" />
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="single__product-content">
                <h2 className="product__title mb-3">Pizza with Mushroom</h2>
                <p className="product__price">
                  Price: <span>$38</span>
                </p>
                <p className="category mb-5">
                  Category: <span>Burger</span>
                </p>

                <button className="addTOcart__btn">Add to Cart</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetails;
