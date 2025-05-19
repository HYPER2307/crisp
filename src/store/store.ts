import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { products } from './products/slice'
import { currentProduct } from './currentProduct/slice'
import { fertilizers } from './fertilizers/slice'
import { currentFertilizer } from './currentFertilizer/slice'

export const store = configureStore({
  reducer: combineReducers({
    products,
    currentProduct,
    fertilizers,
    currentFertilizer,
  })
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch