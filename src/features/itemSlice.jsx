import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncItems = createAsyncThunk(
  "items/fetchAsyncItems",
  async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data;
  }
);

// export const fetchAsyncItemDetail = createAsyncThunk(
//   "items/fetchAsyncItems",
//   async (id) => {
//     const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
//     return res.data;
//   }
// );

const initialState = {
  items: [],
  itemDetail: {},
};

const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncItems.pending, () => {
        console.log("pending");
      })
      .addCase(fetchAsyncItems.fulfilled, (state, { payload }) => {
        state.items = payload;
      })

      .addCase(fetchAsyncItems.rejected, () => {
        console.log("rejected");
      });
  },
});

export default itemSlice.reducer;
export const getAllItems = (state) => state.items.items;
