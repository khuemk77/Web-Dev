import { AppBar, Toolbar, Typography, Badge, Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const cartCount = useSelector((state) => state.cart.cartCount);

  return (
    <AppBar position="fixed" className="header" sx={{backgroundColor: "#BF5700"}} >
      <Toolbar className="toolbar">
        <Box className="logo-container">
          <Link to="/" className="logo-link">
            <img src="/ut-longhorn-icon.jpg" alt="UT Longhorn Logo" className="logo" />
            <Typography variant="h6">Shopping Cart Demo</Typography>
          </Link>
        </Box>

        <Badge badgeContent={cartCount} color="secondary">
          <ShoppingCartIcon fontSize="large" />
        </Badge>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
