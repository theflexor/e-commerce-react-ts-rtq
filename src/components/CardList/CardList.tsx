import { Box} from "@mui/material";
import { IProductCard } from "src/vite-env";
import styled from "styled-components";
import { CardItem } from "../Card/Card";

interface CardListProps {
  data: IProductCard[];
}

export const CardList: React.FC<CardListProps> = ({ data }) => {
  return (
    <CardListStyled>
      {data?.map((card: IProductCard) => (
        <CardItem key={card.item.itemId} card={card} />
      ))}
    </CardListStyled>
  );
};


const CardListStyled = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 30px;
`