import React from 'react'
import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <section className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-linear-to-br from-red-50 to-white px-4">
            <div className="max-w-md w-full rounded-3xl bg-white/80 backdrop-blur-xl p-10 shadow-2xl text-center">

                {/* Error Code */}
                <p className="text-sm font-semibold uppercase tracking-widest text-red-400">
                    Error 404
                </p>

                {/* Main Title */}
                <h1 className="mt-3 text-6xl font-black text-red-500">
                    Page Not Found
                </h1>

                {/* Description */}
                <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                    The page you are looking for doesn’t exist or has been moved.
                </p>

                {/* Action */}
                <Link
                    to="/"
                    className="inline-block mt-8 rounded-xl bg-red-500 px-6 py-3
                               text-sm font-semibold text-white transition
                               hover:bg-red-600"
                >
                    Go Back Home
                </Link>
            </div>
        </section>
    )
}

export default NotFound