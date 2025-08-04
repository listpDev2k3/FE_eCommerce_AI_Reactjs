import { ADD_QUANTITY, ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART, SUB_QUANTITY } from "./actionTypes";

export const addToCart = id => {
    return {
        type: ADD_TO_CART,
        id,
    };
};
export const removeFromCart = id => {
    return {
        type: REMOVE_FROM_CART,
        id,
    };
};
export const subtractQuantity = id => {
    return {
        type: SUB_QUANTITY,
        id,
    };
};
export const addQuantity = id => {
    return {
        type: ADD_QUANTITY,
        id,
    };
};
export const emptyCart = () => {
    return {
        type: EMPTY_CART,
    };
};