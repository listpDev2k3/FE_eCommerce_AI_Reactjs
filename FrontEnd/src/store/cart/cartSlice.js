
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            console.log('🔥 addToCart được gọi');
            console.log('📦 action.payload:', action.payload);
            console.log('📋 state.items trước khi thêm:', JSON.parse(JSON.stringify(state.items)));
            
            const item = state.items.find(i => i.id === action.payload.id);
            if (item) {
                item.quantity += 1;
                console.log('✅ Tăng số lượng sản phẩm');
            } else {
                const newItem = { ...action.payload, quantity: 1 };
                state.items.push(newItem);
                console.log('✅ Thêm sản phẩm mới:', newItem);
            }
            
            console.log('📋 state.items sau khi thêm:', JSON.parse(JSON.stringify(state.items)));
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(i => i.id !== action.payload);
        },
        emptyCart: (state) => {
            state.items = [];
        },
    },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
