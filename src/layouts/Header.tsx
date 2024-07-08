import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link as RouterLink } from "react-router-dom";
import { Typography } from "@mui/material";
import { ExitToApp, Person, ShoppingCart } from "@mui/icons-material";

function Header() {
  return (
    <AppBar color="default" sx={{ bgcolor: "#ffffff", color: "#000000" }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <RouterLink to="/">
            <img
              src="https://hadalabo.com.vn/wp-content/uploads/2018/05/logo-hada-labo-xanh.png"
              alt=""
              style={{ maxWidth: "100%", height: "50px" }}
            />
          </RouterLink>
        </Box>
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/list">
            List
          </Button>
          <Button color="inherit" component={RouterLink} to="/contact">
            Contact
          </Button>
          <Button color="inherit" component={RouterLink} to="/add">
            Create New
          </Button>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            size="large"
            color="inherit"
            component={RouterLink}
            to="/cart"
          >
            <ShoppingCart />
          </IconButton>
          <IconButton
            size="large"
            color="inherit"
            component={RouterLink}
            to="/register"
            sx={{ marginLeft: "10px" }}
          >
            <Person />
            <Typography variant="button" sx={{ marginLeft: "5px" }}>
              Register
            </Typography>
          </IconButton>
          <IconButton
            size="large"
            color="inherit"
            component={RouterLink}
            to="/signin"
            sx={{ marginLeft: "10px" }}
          >
            <ExitToApp />
            <Typography variant="button" sx={{ marginLeft: "5px" }}>
              Sign In
            </Typography>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
