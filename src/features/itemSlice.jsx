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
  "items/fetchAsyncItems",
  async (id) => {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return res.data;
  }
);

const initialState = {
  item: {},
  itemDetail: {},
};

const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncItems.fulfilled, (state, { payload }) => {
      return { ...state, item: payload, loader: false };
    });
  },
});

export default itemSlice.reducer;
