import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

interface TodoState {
  title: string
  text: string
  id: string
}

interface TodoList {
  elems: TodoState[]
  inputTitle: string
  inputText: string
  inputId: string
}

const initialState: TodoList = {
  elems: [{title: "Wow test title", text: "such text", id: "elemid"}],
  inputTitle: "",
  inputText: "",
  inputId: ""
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addElem: (state, action: PayloadAction<TodoState>) => {
      state.elems = state.elems.concat(action.payload)
    },
    removeElem: (state, action: PayloadAction<string>) => {
      state.elems = state.elems.filter(x => x.id !== action.payload)
    }, 
    setTitle: (state, action: PayloadAction<string>) => {
      state.inputTitle = action.payload
    },
    setText: (state, action: PayloadAction<string>) => {
      state.inputText = action.payload
    },
    setId: (state, action: PayloadAction<string>) => {
      state.inputId = action.payload
    }
  },
})

export const { addElem, removeElem, setTitle, setText, setId } = todoSlice.actions

export const selectTodo = (state: RootState) => state.todo.elems