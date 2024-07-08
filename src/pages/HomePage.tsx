import { useEffect, useState } from "react";
import { Product } from "../types/Product";
import axios from "axios";
import { Stack, Box, Container } from "@mui/material";
import ProductCard from "../components/ProductCard";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

const HomePage = () => {
  const [products, setProducts] = useState<Product[] | null>(null);

  const getAllProduct = async () => {
    const { data } = await axios.get("http://localhost:3000/products");
    setProducts(data);
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <>
      <Header />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          mt: 4,
        }}
      >
        <Container sx={{ flex: "1 0 auto", mb: 4, mt: 8 }}>
          {" "}
          <Stack
            direction={"row"}
            flexWrap={"wrap"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={3}
          >
            {products &&
              products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
          </Stack>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default HomePage;
