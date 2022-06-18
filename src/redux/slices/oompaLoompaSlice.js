import { createSlice } from "@reduxjs/toolkit";
import { getOompaLoompasByPageNumber } from "../../api/oompa-loompa-service";

const initialOompaLoompaState = {
  oompaLoompas: [],
  recentOompaLoompas: [],
  loading: false,
  error: false,
};

const oompaLoompaSlice = createSlice({
  name: "oompaLoompas",
  initialState: initialOompaLoompaState,
  reducers: {
    loading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload.message;
    },
    setOompaLoompas: (state, action) => {
      state.oompaLoompas = action.payload;
    },
    clearOompaLoompasIfNeeded: (state, action) => {
        console.log('In clearOompaLoompasIfNeeded:', action);
        const futureDate = new Date('Sat, 18 Jun 2022 10:24:10 GMT');
        const now = new Date();
        console.log('futureDate:', futureDate);
        console.log('now:', now);
        if (futureDate.getTime() > now.getTime()) {
            console.log('Future');
        } else {
            console.log('Now');
        }


      state.oompaLoompas = action.payload;
    },
  },
});

const { loading, setError, setOompaLoompas, clearOompaLoompasIfNeeded } = oompaLoompaSlice.actions;

export const fetchOompaLoompas = (pageNumber) => async (dispatch) => {
  dispatch(loading(true));
  try {
    const oompaLoompas = await getOompaLoompasByPageNumber(pageNumber);
    console.log(`This is Oompa Loompas on page ${pageNumber}`, oompaLoompas);
    dispatch(clearOompaLoompasIfNeeded(oompaLoompas))
    dispatch(setOompaLoompas(oompaLoompas));
    dispatch(loading(false));
  } catch (error) {
    dispatch(loading(false));
    dispatch(setError(error));
  }
};

export const selectOompaLoompas = (state) => state.oompaLoompas.oompaLoompas;
export const selectLoading = (state) => state.oompaLoompas.loading;
export const selectError = (state) => state.oompaLoompas.error;

export default oompaLoompaSlice.reducer;
