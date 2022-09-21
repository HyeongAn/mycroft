import { combineReducers } from 'redux'
import loginSlice from './loginSlice'
import myPageSlice from './mypageSlice'
import storage from 'redux-persist/lib/storage'
import storageSession from 'redux-persist/lib/storage/session'
import { persistReducer } from 'redux-persist'

const loginPersistConfig = {
  key: 'authentication',
  storage,
  blacklist: ['orderProduct'],
}

const productPersistConfig = {
  key: 'orderProduct',
  storage: storageSession,
  whitelist: ['orderProduct'],
}

const rootReducer = combineReducers({
  login: persistReducer(loginPersistConfig, loginSlice),
  mypage: persistReducer(productPersistConfig, myPageSlice),
})

export default rootReducer
