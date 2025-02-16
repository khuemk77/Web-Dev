import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Card, CardContent, Typography, Button, Modal, Box } from "@mui/material";
import products from "../models/products.js"; // Import products list

const ProductCard = ({ id, name, price }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false); // Manage modal state
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const product = products.find((p) => p.id === id); // Find product details

  return (
    <>
      <Card sx={{ maxWidth: 300, padding: "10px", margin: "10px" }}>
        <CardContent>
          <Typography variant="h6">{name}</Typography>
          <Typography color="text.secondary">Price: ${price}</Typography>

          {/* Open Modal Instead of Navigating */}
          <Button variant="contained" color="primary" sx={{ marginTop: "10px" }} onClick={handleOpen}>
            View Details
          </Button>

          {/* Add to Cart */}
          <Button
            variant="contained"
            sx={{ marginTop: "10px", marginLeft: "10px", backgroundColor: "#BF5700" }}
            onClick={() => dispatch(addToCart())}
          >
            Add to Cart
          </Button>
        </CardContent>
      </Card>

      {/* MUI Modal */}
      <Modal open={open} onClose={handleClose} aria-labelledby="product-modal-title">
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "white",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography id="product-modal-title" variant="h6" component="h2">
            {product?.name}
          </Typography>
          <Typography sx={{ mt: 2 }}>Price: ${product?.price}</Typography>
          <Typography sx={{ mt: 2 }}>{product?.description}</Typography>

          <Button onClick={handleClose} sx={{ mt: 3 }} variant="contained" color="error">
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default ProductCard;
