import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        value:[]
    },
    reducers: {
        AddTodo: (state, action) => {
            const newTodo = action.payload.trim();

            if (newTodo !== "") {
                state.value.push(newTodo);
                
            }
        },
        RemoveTodo: (state, action) => {
            state.value.splice(action.payload, 1)
        },
        EditTodo: (state, action) => {
            state.value.splice(action.payload['index'], 1, action.payload['task'])
        },
    }
})

export const { AddTodo, RemoveTodo, EditTodo } = todoSlice.actions;
export default todoSlice.reducer;
