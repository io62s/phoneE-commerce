import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";

class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {value => (
              <div
                className="img-container p-5"
                onClick={() => {
                  value.handleDetail(id);
                  //value.openModal(id);
                }}
              >
                <Link to="/details">
                  <img src={img} alt="phone img" className="card-img-top" />
                </Link>
                <button
                  className="cart-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p className="text-capitalize mb-0" disabled>
                      in cart
                    </p>
                  ) : (
                    <i className="fas fa-cart-plus" />
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>
          {/* card footer */}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1 price">${price}</span>
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

const ProductWrapper = styled.div`
  .card {
    border: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s ease-out;
  }
  .card-footer {
    border: none;
  }

  &:hover {
    .card {
      box-shadow: 0 10px 20px rgba(199, 44, 65, 0.1),
        0 6px 6px rgba(199, 44, 65, 0.1);
    }
  }

  .img-container {
    position: relative;
    overflow: hidden;
  }

  .card-img-top {
    transition: all 0.3s ease-out;
  }

  .img-container:hover .card-img-top {
    transform: scale(1.1);
  }

  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(100%, 100%);
    padding: 0.2rem 0.4rem;
    background: var(--mainYellow);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-top-left-radius: 0.3rem;
    transition: all 0.3s ease-out;
  }

  .cart-btn:hover {
    background: var(--lightBlue);
  }

  .card:hover .cart-btn {
    transform: translate(0, 0);
  }
  .price {
    color: var(--lightBlue);
  }
`;

export default Product;
