import { createSlice } from '@reduxjs/toolkit'

const actionName = 'orderProduct'

export const initialState = {
  orderProduct: {
    totalPages: 3,
    currentPage: 0,
    contents: '',
  },
}

export const mypageSlice = createSlice({
  name: actionName,
  initialState,
  reducers: {
    getInfo: (state, action) => {
      state.orderProduct = action.payload.orderProduct
    },
  },
})

export const { getInfo } = mypageSlice.actions
export default mypageSlice.reducer
