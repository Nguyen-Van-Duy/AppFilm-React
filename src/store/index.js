import { configureStore } from "@reduxjs/toolkit";
import DarkModeReducer from "./darkModeSlice";
import DataFilmReducer from "./dataFilmSlice";

const store = configureStore({
    reducer: {
        darkmode: DarkModeReducer,
        datafilm: DataFilmReducer, 
    }
})

export default store;
