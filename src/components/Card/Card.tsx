import { RouteLinks } from "@components/Router/Router";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { IProductCard } from "src/vite-env";
import styled from "styled-components";

interface CardItemProps {
  card: IProductCard;
}

export const CardItem: React.FC<CardItemProps> = ({ card }) => {
  return (
    <CardStyles className="card" key={card.item.itemId}>
      <Link
        style={{ textDecoration: "none" }}
        to={`${RouteLinks.PRODUCT}/${card.item.itemId}`}
      >
        <CardActionArea className="card-area">
          <CardMedia
            className="card-area_img"
            component="img"
            image={card.item.image}
            alt={card.item.title}
            sx={{ width: "250px" }}
          />
          <CardContent className="card-area_content">
            <Typography variant="h4">{card.item.title}</Typography>
            <Rating
              name="read-only"
              value={card.item.averageStarRate / 2}
              precision={0.5}
              readOnly
            />
            <Typography variant="h5">
              {card.item.sku.def.prices.app}$
            </Typography>
            <Typography variant="h6">
              {card.delivery.shippingDisplay}
            </Typography>
            <Typography className="card-area_content_sales">
              Sales: {card.item.sales}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </CardStyles>
  );
};

const CardStyles = styled(Card)`
  .card-area {
    color: black;
    padding: 10px;
    display: flex;
    gap: 30px;
    justify-content: start;
    &_img {
    }
    &_content {
      display: flex;
      justify-content: start;
      flex-direction: column;
      h4 {
        font-size: 18px;
        line-height: 24px;
        margin-bottom: 10px;
      }
      h5 {
        font-size: 20px;
      }
      h6 {
        margin-top: 5px;
        font-size: 16px;
      }
      &_sales {
        margin-top: 20px;
      }
    }
  }
`;
