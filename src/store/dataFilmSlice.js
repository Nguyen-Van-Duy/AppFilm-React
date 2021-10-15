import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    dataFilm: {
        phimle: [],
        phimbo: [],
        phimhoathinh: [],
        phimchieurap: []
    },
    allDataFilm: [],
    searchData: [],
}

const DataFilmReducer = createSlice({
    initialState: initialState,
    name: 'Film',
    reducers: {
        fetchData(state, action) {
            state.dataFilm = action.payload;
        },
        allDataFilm(state, action) {
            state.allDataFilm = action.payload;
        },
        searchDataHandler(state, action) {
            state.searchData = action.payload;
        }
    }
})

const {reducer, actions} = DataFilmReducer;

const ListFilmReducer = reducer;

export default ListFilmReducer;

export const DataFilmAction = actions;