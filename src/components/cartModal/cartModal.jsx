import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Button,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Cart from "../cart";
import { useCart } from "../../context/useCart";

const CartModal = ({ open, onClose }) => {
  const { clearCart } = useCart();
  return (
    <Dialog open={open} onClose={onClose} closeAfterTransition>
      <DialogTitle sx={{ m: 0, p: 2 }}>Shopping Cart</DialogTitle>
      <DialogContent>
        <Cart />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => clearCart()} startIcon={<DeleteForeverIcon />}>
          Clear Cart
        </Button>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CartModal;
