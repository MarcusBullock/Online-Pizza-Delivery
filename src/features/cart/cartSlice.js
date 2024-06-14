import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            state.cart.push(action.payload);
        },
        deleteItem(state, action) {
            state.cart = state.cart.filter(
                (item) => item.pizzaId !== action.payload,
            );
        },
        increaseItemCount(state, action) {
            const item = state.cart.find((x) => x.pizzaId === action.payload);
            item.quantity++;
            item.totalPrice = item.quantity * item.unitPrice;
        },
        decreaseItemCount(state, action) {
            const item = state.cart.find((x) => x.pizzaId === action.payload);

            item.quantity--;
            item.totalPrice = item.quantity * item.unitPrice;

            if (item.quantity === 0)
                cartSlice.caseReducers.deleteItem(state, action);
        },
        clearCart(state) {
            state.cart = [];
        },
    },
});

export const {
    addItem,
    deleteItem,
    increaseItemCount,
    decreaseItemCount,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getTotalCartQuantity = (state) =>
    state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
    state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCart = (state) => state.cart.cart;

export const getCurrentQuantity = (pizzaId) => (state) =>
    state.cart.cart.find((item) => item.pizzaId === pizzaId)?.quantity ?? 0;
