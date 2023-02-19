import { useTypedDispatch, useTypedSelector } from "@hooks/hook";
import { Box, TextField } from "@mui/material";
import { setSearchData } from "@store/slices/SearchSlice";
import { useState } from "react";
import styled from "styled-components";

export const SearchInput = () => {
  const prevSearch = useTypedSelector((store) => store.searchSlice.settings.q);
  const [searchValue, setSearchValue] = useState<string | undefined>(
    prevSearch
  );
  const dispatch = useTypedDispatch();
  const HandleSearchClick = () => {
    dispatch(setSearchData({ q: searchValue }));
  };
  return (
    <SearchInputStyled>
      <TextField
        className="search"
        onKeyDown={(e) => {
          e.code == "Enter" && HandleSearchClick();
        }}
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        variant="standard"
        label="Search"
        placeholder="item"
      />
    </SearchInputStyled>
  );
};

const SearchInputStyled = styled(Box)`
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: center;
  .search {
    flex-basis: 500px;
  }
`;
