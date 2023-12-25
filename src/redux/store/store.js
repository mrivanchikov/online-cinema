import { configureStore } from "@reduxjs/toolkit";
import { searchReducer } from "../../components/topBar_section/SearchBar";

export const store = configureStore({
    reducer: searchReducer,
});