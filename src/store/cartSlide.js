import { createSlice } from "@reduxjs/toolkit";

const INITIAL_CART = {
    items: [],
}

const cartSlide = createSlice({
    name: "cart",
    initialState: INITIAL_CART,
    reducers: {
        initialCart(state, action) {
            state = action.payload
            return state
        },
        resetCart(state){
            state = INITIAL_CART
            return state
        },
        addItem(state, action) {
            const { product, quantity } = action.payload
            console.log("addItem ~ quantity", quantity)
            console.log("addItem ~ product", product)
            const existIndex = state.items.findIndex(cartItem => cartItem.id === product.id);
            console.log("addItem ~ existIndex", existIndex)
            if(existIndex === -1) {
                state.items = [...state.items, {
                    ...product,
                    quantity: quantity
                }]
            } else {
                state.items[existIndex].quantity = state.items[existIndex].quantity + quantity
            }
        },
        increaseItem(state, action) {
            const id = action.payload
            state.items.forEach(item => {
                if(item.id === id) item.quantity++
            })
        },
        decreaseItem(state, action) {
            const id = action.payload
            state.items.forEach((item, index) => {
                if(item.id === id ){
                    if(item.quantity === 1) state.items.splice(index, 1)
                    else item.quantity--
                }
            })
        },
        removeItem(state, action) {
            const id = action.payload
            const existIndex = state.items.findIndex(cartItem => cartItem.id === id);
            state.items.splice(existIndex, 1)
        }
    }
})


export const cartActions = cartSlide.actions
export default cartSlide.reducer
