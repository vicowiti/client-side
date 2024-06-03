import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import ProductSlice from "../slices/ProductSlice";
import SchoolSlice from "../slices/SchoolSlice";
import InvoiceSlice from "../slices/InvoiceSlice";
import CollectionSlice from "../slices/CollectionSlice";

const store = configureStore({
  reducer: {
    schools: SchoolSlice,
    invoices: InvoiceSlice,
    collection: CollectionSlice,
    products: ProductSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
