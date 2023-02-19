import { useTypedDispatch, useTypedSelector } from "@hooks/hook";
import { setSearchData } from "@store/slices/SearchSlice";
import { ISortSettings } from "src/vite-env";
import styled from "styled-components";
import {
  Box,
  FormControl,
  FormControlLabel,
  Input,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";


export const SideBar = () => {
  const settings = useTypedSelector((store) => store.searchSlice.settings);
  const dispatch = useTypedDispatch();
  const handleSort = (data: ISortSettings) => {
    dispatch(setSearchData(data));
  };

  return (
    <SideBarStyled>
      <Typography>Price</Typography>
      <Box className="price">
        <Box className="price-example">
          <Typography
            className="price-example-text"
            component="p"
            onClick={() => handleSort({ startPrice: "", endPrice: "500" })}
          >
            Under $500
          </Typography>
          <Typography
            className="price-example-text"
            component="p"
            onClick={() => handleSort({ startPrice: "800", endPrice: "1000" })}
          >
            $800 to $1000
          </Typography>
          <Typography
            className="price-example-text"
            component="p"
            onClick={() => handleSort({ startPrice: "1000", endPrice: "" })}
          >
            $1000 & Above
          </Typography>
        </Box>
        <Box className="price-wrapper">
          <Input
            className="price_min"
            // onChange={(e) => handleSort({ endPrice: e.target.value })}
            placeholder="min"
            value={settings.endPrice ? settings.startPrice : ""}
          />
          <Input
            className="price_max"
            // onChange={(e) => handleSort({ startPrice: e.target.value })}
            value={settings.startPrice ? settings.endPrice : ""}
            placeholder="max"
          />
        </Box>
      </Box>
      <FormControl className="sort">
        <Typography>Sorted by</Typography>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="default"
          name="radio-buttons-group"
          onChange={(e) => {
            handleSort({ sort: e.target.value });
          }}
        >
          <FormControlLabel
            value="default"
            control={<Radio size="small" />}
            label="default"
            className="sort-radio"
          />
          <FormControlLabel
            value="salesDesc"
            control={<Radio size="small" />}
            label="salesDesc"
            className="sort-radio"
          />

          <FormControlLabel
            value="priceAsc"
            control={<Radio size="small" />}
            label="priceAsc"
            className="sort-radio"
          />
          <FormControlLabel
            value="priceDesc"
            control={<Radio size="small" />}
            label="priceDesc"
            className="sort-radio"
          />
        </RadioGroup>
      </FormControl>
    </SideBarStyled>
  );
};

const SideBarStyled = styled(Box)`
  padding-right: 10px;
  margin-right: 20px;
  min-width: 200px;
  .price {
    margin-top: 5px;
    &-wrapper {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    &-example {
      &-text {
        margin-top: 7px;
        font-size: 14px;
        color: gray;
        cursor: pointer;
      }
      margin-bottom: 20px;
    }
  }
  .sort {
    margin-top: 45px;
    .css-dmmspl-MuiFormGroup-root {
      gap: -10px !important;
    }
    &-radio {
      span {
        font-size: 14px !important;
      }
    }
  }
`;
