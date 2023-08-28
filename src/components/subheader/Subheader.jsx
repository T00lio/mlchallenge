import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import "./Subheader.css";
import { useCart } from "../../context/useCart";

import { getData, API } from "../../utils/httpsClient";

const Subheader = () => {
  const { cart } = useCart();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cartItems = cart.map((item) => item.id);
  const cartQuantity = cart.map((item) => item.quantity);

  return (
    <div className="subheader">
      <div className="navbarbtn">
        <button className="cart-button" onClick={handleShow}>
          cart
        </button>
        <button className="login-button">login</button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>Shopping Cart</Modal.Header>
        <Modal.Body>
          <h1>Products</h1>
          <ul>
            {cart.map((cartItem) => (
              <li key={cartItem.id}>
                <div className="cartItem">
                  <img
                    src={() =>
                      getData(API + `items/${cartItem.id}`)
                        .then((response) => response.json())
                        .then((data) => data.pictures[0].url)
                    }
                    width={100}
                    height={100}
                    alt="props.title"
                  ></img>
                  <div>
                    {() =>
                      getData(API + `items/${cartItem.id}`)
                        .then((response) => response.json())
                        .then((data) => data.title)
                    }
                  </div>
                  <div>
                    {() =>
                      getData(API + `items/${cartItem.id}`)
                        .then((response) => response.json())
                        .then((data) => data.price)
                    }
                  </div>
                  <div>{cartItem.quantity}</div>
                </div>
              </li>
            ))}
          </ul>
          <br />
        </Modal.Body>
        <Modal.Footer>
          <button className="clearbtn">Clear</button>
          <button className="checkoutbtn">Checkout</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Subheader;
