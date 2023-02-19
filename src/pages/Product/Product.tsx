import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useGetProductDetailQuery } from "@store/getItem";
import { IproductItem } from "src/types/productItemTypes";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Specification } from "@components/Table/Table";
import { setItemBasket } from "@store/slices/BasketSlice";
import { useTypedDispatch, useTypedSelector } from "@hooks/hook";
import { toast } from "react-toastify";
export const Product = () => {
  const { id } = useParams();
  const { data, isFetching } = useGetProductDetailQuery(id);
  // const hasBasket = useTypedSelector((store) => store.basket.data)
  const item: IproductItem = data?.result.item;
  const service = data?.result.service[0];
  const dispatch = useTypedDispatch();
  console.log(item);

  const handleClickBtn = (item: IproductItem) => {
    toast("added product", {position: 'bottom-right'});
    dispatch(setItemBasket(item));
  };


  if (isFetching) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }
  return (
    <ProductStyles>
      <Box className="product-top">
        <Box className="product-top_image">
          <Box component="img" src={item.images[0]} />
        </Box>
        <Box className="product-top_content">
          <Typography variant="h3">{item.title}</Typography>
          <Box className="product-top_content_main">
            <Typography component="span">Sales: {item.sales}</Typography>
            <Typography component="p">
              Avg price: {item.sku.def.price}$
            </Typography>
            <Typography component="p">
              Promotion Price: {item.sku.def.promotionPrice}$
            </Typography>
            <Typography component="p">
              Quantity: {item.sku.def.quantity}
            </Typography>
            <Typography component="p">
              Available: {item.available ? "true" : "false"}
            </Typography>
          </Box>
          <Box className="product-top_content_service">
            <Typography component="span">Service: {service.title}</Typography>
            <Typography component="p">check: {service.desc}$</Typography>
          </Box>
          <Box className="product-top_content_order">
            <Button onClick={() => handleClickBtn(item)} variant="outlined">
              Pre-order now
            </Button>
            <Typography variant="h5">
              {item.sku.def.promotionPrice
                ? String(item.sku.def.promotionPrice).split(" ")[0]
                : item.sku.def.price}
              $
            </Typography>
          </Box>
        </Box>
      </Box>
      <Specification rows={item.properties.list} />
    </ProductStyles>
  );
};

const ProductStyles = styled(Box)`
  .product-top {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    &_image {
      flex-basis: 60%;
      img {
        width: 100%;
      }
    }
    &_content {
      flex-basis: 80%;
      &_main {
        margin-top: 30px;
      }
      &_order {
        margin-top: 40px;
        display: flex;
        gap: 20px;
      }
      h3 {
        font-size: 30px;
      }
      span {
        font-size: 17px;
      }
    }
  }
`;
