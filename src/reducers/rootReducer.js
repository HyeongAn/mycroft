import { combineReducers } from 'redux'
import loginSlice from './loginSlice'
import myPageSlice from './mypageSlice'

const rootReducer = combineReducers({
  login: loginSlice,
  mypage: myPageSlice,
})

export default rootReducer
