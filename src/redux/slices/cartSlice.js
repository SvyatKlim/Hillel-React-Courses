import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {calcTotalCount, calcTotalPrice, shuffleArray} from "../helpers.js";

const initialState = {
    items: [],
    products: [],
    totalPrice: 0,
    totalCount: 0,
}

export const fetchProducts = createAsyncThunk('cart/fetchProducts', async () => {
    const res = await fetch('https://655072c57d203ab6626dcdc9.mockapi.io/products');
    const data = res.json();
    return data;
})

const cartSlice = createSlice({
    name: 'cart', initialState: initialState, reducers: {
        addToCart: (state, {payload}) => {
            console.log(payload)
            const product = state.items.find(product => product.id === payload.id);
            if (product) {
                product.quantity = product.quantity + payload.quantity;
            } else {
                state.items.push({...payload});
            }
            state.totalPrice = calcTotalPrice(state.items);
            state.totalCount = calcTotalCount(state.items);

        }, removeItemFromCart: (state, {payload}) => {
            state.items = state.items.filter(product => product.id !== payload)
            state.totalPrice = calcTotalPrice(state.items);
            state.totalCount = calcTotalCount(state.items);

        }, increment: (state, {payload}) => {
            const product = state.items.find(product => product.id === payload);
            if (product.quantity) {
                product.quantity = product.quantity + 1;
            }
            state.totalPrice = calcTotalPrice(state.items);
            state.totalCount = calcTotalCount(state.items);

        }, decrement: (state, {payload}) => {
            const product = state.items.find(product => product.id === payload);
            if (product.quantity <= 1) {
                state.items = state.items.filter(product => product.id !== payload)
            } else if (product.quantity >= 1) {
                product.quantity = product.quantity - 1;
            }
            state.totalPrice = calcTotalPrice(state.items);
            state.totalCount = calcTotalCount(state.items);

        }, resetCart: (state) => {
            state.items = initialState.items;
            state.totalCount = initialState.totalCount;
            state.totalPrice = initialState.totalPrice
        },
        refetchProducts: (state) => {
            state.products = shuffleArray(state.products);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
        })
        builder.addCase(fetchProducts.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.products = payload;
        })
        builder.addCase(fetchProducts.rejected, (state) => {
            state.isError = true;
        })
    }
});

export default cartSlice.reducer;
export const {addToCart, removeItemFromCart, increment, decrement, resetCart,refetchProducts} = cartSlice.actions;
