import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};
const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addToFavorites: (state, action) => {
            if (!state.items.includes(action.payload)) {
                state.items.push(action.payload);
                const item = state.items.find(i => i.id === action.payload.id);
                console.log('addToFavorites', item);
            }
        },
        removeFromFavorites: (state, action) => {
            state.items = state.items.filter(i => i !== action.payload);
        },
        emptyFavorites: (state) => {
            state.items = [];
        },
    },
});
export  const { addToFavorites, removeFromFavorites, emptyFavorites} = favoritesSlice.actions;
export default favoritesSlice.reducer;
