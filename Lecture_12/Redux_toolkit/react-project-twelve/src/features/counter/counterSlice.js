import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// async thunk

// async increment
export const incrementAsync = createAsyncThunk(
    'counter/incrementAsync',
    async (amount, { rejectWithValue }) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000))
            return amount;
        } catch (error) {
            return rejectWithValue('Increment failed!')
        }
    }
)

// async decrement
export const decrementAsync = createAsyncThunk(
    'counter/decrementAsync',
    async (amount, { rejectWithValue }) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000))
            return amount;
        } catch (error) {
            return rejectWithValue('Decrement failed!')
        }
    }
)


const initialState = {
    value: 0,
    status: 'idle', // idle | loading | failed
    error: null,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        reset: (state) => {
            state.value = 0;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
    extraReducers: (builder) => {
        builder

            //incrementAsync
            .addCase(incrementAsync.pending, (state) => {
                state.status = 'loading'
                state.error = null
            })
            .addCase(incrementAsync.fulfilled, (state, action) => {
                state.status = 'idle'
                state.value += action.payload
            })
            .addCase(incrementAsync.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })

            // decrementAsync
            .addCase(decrementAsync.pending, (state) => {
                state.status = 'loading'
                state.error = null
            })
            .addCase(decrementAsync.fulfilled, (state, action) => {
                state.status = 'idle'
                state.value -= action.payload
            })
            .addCase(decrementAsync.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
    },
})

export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer