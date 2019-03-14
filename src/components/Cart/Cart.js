import React, { Component, Fragment } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

class Cart extends Component {
  render() {
    return (
      <section
        style={{
          marginTop: "6rem"
        }}
      >
        <ProductConsumer>
          {value => {
            const { cart } = value;
            //if cart is not empty render title and cartColumns components
            if (cart.length > 0) {
              return (
                <Fragment>
                  <Title
                    name="your"
                    title="cart"
                    style={{ marginBottom: "3rem" }}
                  />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} />
                </Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}

export default Cart;

// style={{marginTop: "4rem"}}
