import { useTypedDispatch, useTypedSelector } from "@hooks/hook";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { removeItemBasket, setItemBasket } from "@store/slices/BasketSlice";
import { IproductItem } from "src/types/productItemTypes";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Basket = () => {
  const products = useTypedSelector((store) => store.basket.data);
  const dispatch = useTypedDispatch();
  const removeProduct = (id: string) => {
    dispatch(removeItemBasket(id));
  };

  const addProduct = (item: IproductItem) => {
    dispatch(setItemBasket(item));
  };

  return (
    <BasketStyle sx={{ display: "flex", justifyContent: "center" }}>
      {products.map((item) => (
        <Box
          sx={{ display: "flex", alignItems: "center", gap: "50px" }}
          key={item.itemId}
        >
          <Box sx={{ width: "170px" }} component="img" src={item.images[0]} />
          <Box>
            <Link to={"/product/" + item.itemId}>
              <Typography variant="h3" sx={{ maxWidth: "800px" }}>
                {item.title}
              </Typography>
            </Link>
            <Box className={"basket-interface"}>
              <Box>
                <Typography>count: {item.count}</Typography>
                <Button onClick={() => removeProduct(item.itemId)}>
                  remove
                </Button>
                <Button onClick={() => addProduct(item)}>Add</Button>
              </Box>
              <Box>
                <Typography>
                  {typeof item.sku.def.promotionPrice == "string"
                    ? Number(item.sku.def.promotionPrice.split(" ")[0]) *
                      item.count
                    : item.sku.def.price}
                  $
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </BasketStyle>
  );
};

const BasketStyle = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  h3 {
    font-size: 20px;
  }
  a {
    text-decoration: none;
    color: black;
  }

  .basket-interface {
    display: flex;
  }
`;
