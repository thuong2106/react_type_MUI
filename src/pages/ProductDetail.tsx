import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../types/Product";
import axios from "axios";
import {
  Container,
  Typography,
  CircularProgress,
  Box,
  Grid,
  Button,
} from "@mui/material";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { AddCircle, RemoveCircle } from "@mui/icons-material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState<number>(1);

  const getProductById = async () => {
    const { data } = await axios.get(`http://localhost:3000/products/${id}`);
    setProduct(data);
    setLoading(false);
  };

  useEffect(() => {
    getProductById();
  }, [id]);

  const handleQuantityChange = (amount: number) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of product ${id} to cart`);
  };

  if (loading) {
    return (
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Container>
    );
  }

  return (
    <>
      <Header />
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src={product?.image}
                alt={product?.title}
                style={{
                  maxWidth: "100%",
                  height: "400px",
                  borderRadius: "8px",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 2 }}>
              <Typography variant="h4" gutterBottom sx={{ color: "#42a5f5" }}>
                {product?.title}
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 2 }}>
                {product?.description}
              </Typography>
              <Typography
                variant="h5"
                color="textPrimary"
                sx={{ mt: 2, color: "#d50000" }}
              >
                ${product?.price.toFixed(2)}
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                Category: {product?.category}
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                Rating: 4.5/5
              </Typography>
              <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="center"
              >
                <Grid item>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => handleQuantityChange(-1)}
                  >
                    <RemoveCircle />
                  </Button>
                </Grid>
                <Grid item>
                  <Typography variant="h6">{quantity}</Typography>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => handleQuantityChange(1)}
                  >
                    <AddCircle />
                  </Button>
                </Grid>
              </Grid>
              <Box sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mr: 2, backgroundColor: "#42a5f5" }}
                  onClick={handleAddToCart}
                >
                  Add to Cart
                  <AddShoppingCartIcon sx={{ ml: 2 }} />
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ backgroundColor: "#ef5350" }}
                >
                  Buy Now
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default ProductDetail;
