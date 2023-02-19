import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IproductItem } from "src/types/productItemTypes";

interface IBasket {
  data: IproductItem[];
}

const initialState: IBasket = {
  data: [],
};

export const BasketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setItemBasket(state, action: PayloadAction<IproductItem>) {
      const findItem = state.data.find(
        (obj) => obj.itemId === action.payload.itemId
      );
      if (findItem) {
        findItem.count++;
      } else {
        state.data.push({ ...action.payload, count: 1 });
      }
    },
    removeItemBasket(state, action: PayloadAction<string>) {
      const findItem = state.data.find((obj) => obj.itemId === action.payload)!;

      if (findItem?.count > 1) {
        findItem.count--;
      } else {
        state.data = state.data.filter(
          (item) => item.itemId !== findItem.itemId
        );
      }
    },
  },
});

export const { setItemBasket, removeItemBasket } = BasketSlice.actions;
export default BasketSlice.reducer;
