import { BasketSlice } from "./slices/BasketSlice";
import { SearchSlice } from "./slices/SearchSlice";
import { ItemDetail } from "./getItem";
import storage from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  searchSlice: SearchSlice.reducer,
  basket: BasketSlice.reducer,
  [ItemDetail.reducerPath]: ItemDetail.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: true,
      },
    }).concat(ItemDetail.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
