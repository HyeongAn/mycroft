import { createSlice } from '@reduxjs/toolkit'

const actionName = 'orderProduct'

export const initialState = {
  orderProduct: {
    totalPages: 0,
    currentPage: 0,
    content: '',
  },
}

export const mypageSlice = createSlice({
  name: actionName,
  initialState,
  reducers: {
    getInfo: (state, action) => {
      state.orderProduct = action.payload
    },
  },
})

export const { getInfo } = mypageSlice.actions
export default mypageSlice.reducer
