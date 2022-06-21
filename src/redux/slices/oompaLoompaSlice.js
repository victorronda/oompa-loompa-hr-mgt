import { createSlice } from "@reduxjs/toolkit";
import {
  getOompaLoompaById,
  getOompaLoompasByPageNumber,
} from "../../api/oompa-loompa-service";
import { hasExpired } from "../../utils/date-utils";

const initialOompaLoompaState = {
  oompaLoompas: [],
  oompaLoompa: {},
  recentOompaLoompas: [],
  isLoading: false,
  error: false,
};

const oompaLoompaSlice = createSlice({
  name: "oompaLoompas",
  initialState: initialOompaLoompaState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload.message;
    },
    setOompaLoompas: (state, action) => {
      state.oompaLoompas = action.payload;
    },
    setOompaLoompa: (state, action) => {
      state.oompaLoompa = action.payload;
    },
  },
});

const { setIsLoading, setError, setOompaLoompas, setOompaLoompa } =
  oompaLoompaSlice.actions;

const fetchOompaLoompasForFirstTime = (pageNumber) => async (dispatch) => {
  dispatch(setIsLoading(true));
  try {
    const oompaLoompas = await getOompaLoompasByPageNumber(pageNumber);
    localStorage.setItem("oompaLoompas", JSON.stringify(oompaLoompas));
    dispatch(setOompaLoompas(oompaLoompas));
    dispatch(setIsLoading(false));
  } catch (error) {
    dispatch(setIsLoading(false));
    dispatch(setError(error));
  }
};

export const fetchOompaLoompas = (pageNumber) => async (dispatch) => {
  const storedOompaLoompas = localStorage.getItem("oompaLoompas");
  if (storedOompaLoompas) {
    const oompaLoompas = JSON.parse(storedOompaLoompas);
    const expired = hasExpired(oompaLoompas.expires);
    if (expired) {
      localStorage.removeItem('oompaLoompas');
      dispatch(fetchOompaLoompasForFirstTime());
    } else {
      dispatch(setOompaLoompas(oompaLoompas));
    }
  } else {
    dispatch(fetchOompaLoompasForFirstTime());
  }
};

export const fetchOompaLoompaById = (oompaLoompaId) => async (dispatch) => {
  dispatch(setIsLoading(true));
  dispatch(setOompaLoompa({}));
  try {
    const oompaLoompa = await getOompaLoompaById(oompaLoompaId);
    dispatch(setOompaLoompa(oompaLoompa));
    dispatch(setIsLoading(false));
  } catch (error) {
    dispatch(setIsLoading(false));
    dispatch(setError(error));
  }
};

export const selectOompaLoompas = (state) => state.oompaLoompas.oompaLoompas;
export const selectOompaLoompa = (state) => state.oompaLoompas.oompaLoompa;
export const selectIsLoading = (state) => state.oompaLoompas.isLoading;
export const selectError = (state) => state.oompaLoompas.error;

export default oompaLoompaSlice.reducer;
