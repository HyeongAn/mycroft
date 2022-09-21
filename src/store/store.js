import { configureStore } from '@reduxjs/toolkit'
import { PERSIST, PURGE } from 'redux-persist'
import rootReducer from '../reducers/rootReducer'

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST, PURGE],
      },
    }),
})

export default store
