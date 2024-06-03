import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createSchool,
  getAllSchools,
  NewSchool,
} from "../../services/schools/data";
import { School } from "../../types/global";

interface InitialState {
  schools: School[];
}

const initialState: InitialState = {
  schools: [],
};

export const getSchools = createAsyncThunk("getSchools", async () => {
  const response = await getAllSchools();
  return response;
});

export const addNewSchool = createAsyncThunk(
  "addNewSchool",
  async (school: NewSchool) => {
    const response = await createSchool(school);
    return response;
  }
);

export const SchoolSlice = createSlice({
  name: "schools",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getSchools.fulfilled, (state, { payload }) => {
      state.schools = payload;
    });

    builder.addCase(addNewSchool.fulfilled, (state, { payload }) => {
      state.schools.push(payload);
    });
  },
});

export default SchoolSlice.reducer;
