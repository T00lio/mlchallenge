import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./Subheader.css";

const Subheader = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <div className="cartItem">
            <img
              src="https://http2.mlstatic.com/D_NQ_NP_2X_932878-MLA46770795587_072021-F.webp"
              width={70}
              height={70}
              alt="Iphone"
            ></img>
            <h5>Iphone</h5>
            <h5>$1000</h5>
            <button className="removebtn">Remove</button>
            <p>Qty: 1</p>
            <br />
          </div>
          <div className="total">
            <strong>Cart Total: $1000</strong>
          </div>
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
