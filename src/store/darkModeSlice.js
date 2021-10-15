import { createSlice } from '@reduxjs/toolkit';

const initialDarkmode = {
    isDarkmode: true,
    darkmode: {
        backgroundColor: '#0c2738',
        color: '#fff',
    },
    light: {
        backgroundColor: '#fff',
        color: '#000',
        fontWeight: '500',
        
    },
    background: {
        backgroundColor: '#081b27'
    },
}

const darkModeSlice = createSlice({
    name: 'Dark Mode',
    initialState: initialDarkmode,
    reducers: {
        handlerDarkMode(state) {
            state.isDarkmode = !state.isDarkmode;
        }

    }
})

const {reducer, actions} = darkModeSlice;
const DarkModeReducer = reducer;

export default DarkModeReducer;

export const DarkModeAction = actions;