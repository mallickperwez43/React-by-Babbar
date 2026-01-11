import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodoById, clearTodo } from '../features/todo/todoSlice'
import { useState } from 'react'

const TodoPanel = () => {
    const [todoId, setTodoId] = useState('')

    const { data, status, error } = useSelector(state => state.todo)
    const dispatch = useDispatch()

    const isLoading = status === 'loading'

    return (
        <div className="bg-slate-800 p-6 rounded-xl shadow-lg space-y-5 w-96">
            <h2 className="text-xl font-semibold text-white text-center">
                Fetch Todo
            </h2>

            <input
                type="number"
                value={todoId}
                onChange={e => setTodoId(e.target.value)}
                placeholder="Enter Todo ID"
                className="w-full bg-slate-700 text-white px-3 py-2 rounded-lg"
            />

            <button
                disabled={isLoading}
                onClick={() => {
                    if (!todoId) return
                    dispatch(fetchTodoById(Number(todoId)))
                }}
                className="w-full bg-emerald-600 text-white py-2 rounded-lg"
            >
                {isLoading ? 'Fetching...' : 'Fetch Todo'}
            </button>

            {error && <p className="text-red-400 text-sm">{error}</p>}

            {data && (
                <div className="bg-slate-700 p-4 rounded-lg space-y-2">
                    <p className="text-white font-semibold">
                        #{data.id} — {data.title}
                    </p>
                    <p
                        className={`text-sm ${data.completed ? 'text-green-400' : 'text-yellow-400'
                            }`}
                    >
                        Status: {data.completed ? 'Completed' : 'Pending'}
                    </p>

                    <button
                        onClick={() => dispatch(clearTodo())}
                        className="w-full border border-slate-500 text-slate-300 py-1 rounded-lg"
                    >
                        Clear
                    </button>
                </div>
            )}
        </div>
    )
}

export default TodoPanel
