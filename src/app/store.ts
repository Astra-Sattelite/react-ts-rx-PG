import { configureStore } from '@reduxjs/toolkit'
import { counterSlice }  from "../components/counter/counterSlice"
import { todoSlice }  from "../components/todo/todoSlice"

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    todo: todoSlice.reducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch