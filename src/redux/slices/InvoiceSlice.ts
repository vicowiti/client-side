import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Invoice } from "../../types/global";
import {
  CreateInvoice,
  createInvoice,
  getAllInvoices,
  getSchoolInvoices,
} from "../../services/invoices/data";

interface InitialState {
  invoices: Invoice[];
  schoolInvoices: Invoice[];
}

const initialState: InitialState = {
  invoices: [],
  schoolInvoices: [],
};

export const getInvoices = createAsyncThunk("getInvoices", async () => {
  const response = await getAllInvoices();
  return response;
});

export const getOneSchoolInvoices = createAsyncThunk(
  "getSinleInvoices",
  async (id: string) => {
    const response = await getSchoolInvoices(id);
    return response;
  }
);

export const createNewInvoice = createAsyncThunk(
  "createNewInvoice",
  async (data: CreateInvoice) => {
    const response = await createInvoice(data);
    return response;
  }
);

export const InvoiceSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getInvoices.fulfilled, (state, { payload }) => {
      state.invoices = payload;
    });

    builder.addCase(getOneSchoolInvoices.fulfilled, (state, { payload }) => {
      state.schoolInvoices = payload;
    });

    builder.addCase(createNewInvoice.fulfilled, (state, { payload }) => {
      state.schoolInvoices.push(payload);
    });
  },
});

export default InvoiceSlice.reducer;
