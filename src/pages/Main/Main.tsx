import { CardList } from "@components/index";
import { useTypedSelector } from "@hooks/hook";
import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useGetProductsSearchQuery } from "src/redux/getItem";
import { IProductCard } from "src/vite-env";
import styled from "styled-components";

export const Main = () => {
  const searchValue = useTypedSelector((store) => store.searchSlice.settings);
  const { data, isFetching } = useGetProductsSearchQuery(searchValue);
  const data1: IProductCard[] = data?.result?.resultList;
  console.log('render');
    
  if (isFetching) {
    return (
      <div>
        <CircularProgress sx={{ display: "flex", justifyContent: "center" }} />
      </div>
    );
  }

  return (
    <MainPageStyled>
      <CardList data={data1} />
    </MainPageStyled>
  );
};

const MainPageStyled = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 40px;
  .card {
    display: flex;
    gap: 20px;
    h3 {
      font-size: 18px;
      line-height: 24px;
    }
  }
`;
