import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncItems = createAsyncThunk(
  "items/fetchAsyncItems",
  async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data;
  }
);

export const fetchAsyncItemDetail = createAsyncThunk(
  "items/fetchAsyncItemDetail",
  async (id) => {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return res.data;
  }
);

const initialState = {
  items: [],
  itemDetails: [],
  cartItems: [],
  filteredItems: [],
  loader: true,
  dark: false,
  cartCounter: 0,
};

const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    removeItemDetail: (state) => {
      state.itemDetails = [];
    },
    setFilteredItems(state, { payload }) {
      state.filteredItems = payload;
    },
    setThemeState(state, { payload }) {
      state.dark = payload;
    },
    incrementCartCounter: (state, { payload }) => {
      state.cartCounter = payload;
    },
    addCartItems: (state, { payload }) => {
      state.cartItems.push(payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncItems.pending, (state) => {
        console.log("pending");
        state.loader = true;
      })
      .addCase(fetchAsyncItems.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.loader = false;
      })
      .addCase(fetchAsyncItemDetail.fulfilled, (state, { payload }) => {
        state.itemDetails = [];
        state.itemDetails.push(payload);
        state.loader = false;
      })
      .addCase(fetchAsyncItems.rejected, () => {
        console.log("rejected");
      });
  },
});

export default itemSlice.reducer;
export const getAllItems = (state) => state.items.items;
export const getAllDetails = (state) => state.items.itemDetails;
export const getLoaderState = (state) => state.items.loader;
export const getThemeState = (state) => state.items.dark;
export const getCartCounterState = (state) => state.items.cartCounter;
export const getCartItems = (state) => state.items.cartItems;
export const {
  removeItemDetail,
  setFilteredItems,
  setThemeState,
  incrementCartCounter,
  addCartItems,
} = itemSlice.actions;
