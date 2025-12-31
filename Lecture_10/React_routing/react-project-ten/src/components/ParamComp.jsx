import React from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

const ParamComp = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [inputId, setInputId] = useState("")
    const [student, setStudent] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [hasSearched, setHasSearched] = useState(false)

    // ✅ Always start with empty state (even on reload)
    useEffect(() => {
        setHasSearched(false)
        setStudent(null)
        setError("")
    }, [])

    useEffect(() => {
        if (!id || !hasSearched) return

        setLoading(true)
        setError("")
        setStudent(null)

        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => {
                if (!res.ok) throw new Error("Student not found")
                return res.json()
            })
            .then(data => {
                setStudent(data)
                setLoading(false)
            })
            .catch(err => {
                setError(err.message)
                setLoading(false)
            })
    }, [id, hasSearched])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!inputId.trim()) return

        setHasSearched(true)
        navigate(`/student/${inputId}`)
        setInputId("")
    }

    return (
        <section className="min-h-[calc(100vh-64px)] bg-linear-to-br from-purple-50 to-white flex items-center justify-center px-4">
            <div className="w-full max-w-md rounded-3xl bg-white/80 backdrop-blur-xl p-8 shadow-2xl">

                {/* Title */}
                <h1 className="text-2xl font-black text-center text-purple-600">
                    Student Lookup
                </h1>
                <p className="mt-1 text-center text-sm text-gray-500">
                    Enter a student ID (1 - 10)
                </p>

                {/* Input */}
                <form onSubmit={handleSubmit} className="mt-6 flex gap-3">
                    <input
                        type="number"
                        min="1"
                        max="10"
                        placeholder={id ? `Last visited ID: ${id}` : "Student ID"}
                        value={inputId}
                        onChange={(e) => setInputId(e.target.value)}
                        className="flex-1 rounded-xl border px-4 py-2 text-sm
                       focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                    <button
                        type="submit"
                        disabled={!inputId}
                        className="rounded-xl bg-purple-500 px-5 py-2 text-sm font-semibold
                       text-white transition disabled:opacity-50 disabled:cursor-not-allowed
                       hover:bg-purple-600"
                    >
                        Get
                    </button>
                </form>

                {/* Empty State */}
                {!hasSearched && (
                    <p className="mt-8 text-center text-gray-400 text-sm">
                        No student selected yet
                    </p>
                )}

                {/* Loading */}
                {loading && (
                    <p className="mt-6 text-center text-gray-600 animate-pulse">
                        Fetching student...
                    </p>
                )}

                {/* Error */}
                {error && (
                    <p className="mt-6 text-center text-red-500 text-sm">
                        {error}
                    </p>
                )}

                {/* Result */}
                {student && (
                    <div className="mt-8 text-center animate-fade-in">
                        <p className="text-xs uppercase tracking-widest text-purple-400">
                            Student #{student.id}
                        </p>
                        <h2 className="mt-2 text-3xl font-black text-purple-600">
                            {student.name}
                        </h2>
                        <p className="mt-1 text-gray-600">{student.email}</p>
                        <p className="mt-1 text-gray-600">{student.phone}</p>
                    </div>
                )}

            </div>
        </section>
    )
}

export default ParamComp
