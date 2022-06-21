import { configureStore } from "@reduxjs/toolkit";
import oompaLoompaReducer from "./slices/oompaLoompaSlice";

export default configureStore({
    reducer: {
        oompaLoompas: oompaLoompaReducer
    }
})
