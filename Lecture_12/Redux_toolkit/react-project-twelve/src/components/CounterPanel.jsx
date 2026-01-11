import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    increment,
    decrement,
    reset,
    incrementByAmount,
    incrementAsync,
    decrementAsync,
} from '../features/counter/counterSlice'
import { useState } from 'react'

const CounterPanel = () => {
    const [amount, setAmount] = useState('')
    const [asyncAmount, setAsyncAmount] = useState('')

    const { value, status, error } = useSelector(state => state.counter)
    const dispatch = useDispatch()

    const isLoading = status === 'loading'

    return (
        <div className="bg-slate-800 p-6 rounded-xl shadow-lg space-y-5 w-96">
            <h2 className="text-xl font-semibold text-white text-center">
                Counter
            </h2>

            <p className="text-5xl font-bold text-blue-400 text-center">
                {value}
            </p>

            {error && <p className="text-red-400 text-sm text-center">{error}</p>}

            {/* Sync */}
            <div className="flex gap-3">
                <button
                    disabled={isLoading}
                    onClick={() => dispatch(decrement())}
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg"
                >
                    −
                </button>
                <button
                    disabled={isLoading}
                    onClick={() => dispatch(increment())}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg"
                >
                    +
                </button>
            </div>

            {/* Async */}
            <input
                type="number"
                value={asyncAmount}
                onChange={e => setAsyncAmount(e.target.value)}
                placeholder="Async amount"
                className="w-full bg-slate-700 text-white px-3 py-2 rounded-lg"
            />

            <div className="flex gap-2">
                <button
                    onClick={() => {
                        if (!asyncAmount) return
                        dispatch(incrementAsync(Number(asyncAmount)))
                        setAsyncAmount('')
                    }}
                    className="flex-1 bg-purple-600 text-white py-2 rounded-lg"
                >
                    Async +
                </button>

                <button
                    onClick={() => {
                        if (!asyncAmount) return
                        dispatch(decrementAsync(Number(asyncAmount)))
                        setAsyncAmount('')
                    }}
                    className="flex-1 bg-purple-600 text-white py-2 rounded-lg"
                >
                    Async −
                </button>
            </div>

            {/* Custom */}
            <input
                type="number"
                value={amount}
                onChange={e => setAmount(e.target.value)}
                placeholder="Custom amount"
                className="w-full bg-slate-700 text-white px-3 py-2 rounded-lg"
            />

            <button
                onClick={() => {
                    if (!amount) return
                    dispatch(incrementByAmount(Number(amount)))
                    setAmount('')
                }}
                className="w-full bg-blue-600 text-white py-2 rounded-lg"
            >
                Add Amount
            </button>

            <button
                onClick={() => dispatch(reset())}
                className="w-full border border-slate-500 text-slate-300 py-2 rounded-lg"
            >
                Reset
            </button>
        </div>
    )
}

export default CounterPanel

