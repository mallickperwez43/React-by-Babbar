import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// async fetch todo by id
export const fetchTodoById = createAsyncThunk(
    'todo/fetchById',
    async (id, thunkAPI) => {
        try {
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/todos/${id}`
            )

            if (!res.ok) {
                throw new Error('Todo not found')
            }

            return await res.json()
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

const initialState = {
    data: null,
    status: 'idle',
    error: null,
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        clearTodo(state) {
            state.data = null
            state.status = 'idle'
            state.error = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodoById.pending, (state) => {
                state.status = 'loading'
                state.error = null
            })
            .addCase(fetchTodoById.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.data = action.payload
            })
            .addCase(fetchTodoById.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
    },
})

export const { clearTodo } = todoSlice.actions
export default todoSlice.reducer
