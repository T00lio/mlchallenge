import { Dialog, DialogContent, DialogTitle, DialogActions, Button } from "@mui/material";
import Cart from "../cart";

const CartModal = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} closeAfterTransition>
      <DialogTitle sx={{ m: 0, p: 2 }}>Shopping Cart (beta)</DialogTitle>
      <DialogContent>
        <Cart />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CartModal;
