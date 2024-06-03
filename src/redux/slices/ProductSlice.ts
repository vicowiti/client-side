import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../../types/global";
import {
  createProduct,
  getAllProducts,
  MyProduct,
} from "../../services/products/data";

interface InitialState {
  products: Product[];
}

const initialState: InitialState = {
  products: [],
};

export const getProducts = createAsyncThunk("getProducts", async () => {
  const response = await getAllProducts();
  return response;
});

export const addNewProduct = createAsyncThunk(
  "addNewProduct",
  async (data: MyProduct) => {
    const response = await createProduct(data);
    return response;
  }
);

export const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.products = payload;
    });

    builder.addCase(addNewProduct.fulfilled, (state, { payload }) => {
      state.products.push(payload);
    });
  },
});

export default ProductSlice.reducer;
