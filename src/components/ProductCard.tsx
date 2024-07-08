import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

type ProductCardProps = {
  product: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  };
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { id, image, title, description, price } = product;
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image={image}
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" sx={{ color: '#42a5f5' }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="h6" component="p" sx={{ color: '#d50000' }}>
          ${price}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Button size="small" component={Link} to={`/products/${id}`}>
          Xem chi tiết
        </Button>
        <Button size="small" variant="contained" color="primary">
          Mua ngay
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
