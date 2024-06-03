import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Collection } from "../../types/global";

import {
  createCollection,
  editCollection,
  getAllCollections,
  getInvoiceCollections,
  NewCollection,
} from "../../services/collections/data";

interface InitialState {
  collections: Collection[];
  invoiceCollections: Collection[];
}

const initialState: InitialState = {
  collections: [],
  invoiceCollections: [],
};

export const getCollections = createAsyncThunk("getCollections", async () => {
  const response = await getAllCollections();
  return response;
});

export const getCurrentInvoiceCollections = createAsyncThunk(
  "getCurrentInvoiceCollections",
  async (invoiceNumber: string) => {
    const response = await getInvoiceCollections(invoiceNumber);
    return response;
  }
);

export const createNewCollection = createAsyncThunk(
  "createNewCollection",
  async (data: NewCollection) => {
    const response = await createCollection(data);
    return response;
  }
);

export const editExistingCollection = createAsyncThunk(
  "ditExistingCollection",
  async (data: { data: Collection; id: string }) => {
    const response = await editCollection(data.data, data.id);
    return response;
  }
);

export const CollectionSlice = createSlice({
  name: "collections",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getCollections.fulfilled, (state, { payload }) => {
      state.collections = payload;
    });

    builder.addCase(
      getCurrentInvoiceCollections.fulfilled,
      (state, { payload }) => {
        state.invoiceCollections = payload;
      }
    );
  },
});

export default CollectionSlice.reducer;
