import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { Product } from '../models/product'

export type BasketSliceState = {
  items: Product[]
}

const initialState: BasketSliceState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<Product>) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action: PayloadAction<{ id: number }>) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      )

      const newState = [...state.items]
      if (index >= 0) {
        newState.splice(index, 1)
      } else {
        console.warn('Produto não esta no carrinho')
      }

      state.items = newState
    },
  },
})

export const { addToBasket, removeFromBasket } = basketSlice.actions

export const selectItems = (state: RootState) => state.basket.items
export const selectTotal = (state: RootState) =>
  state.basket.items.reduce((total, item) => total + item.price, 0)

export default basketSlice.reducer
