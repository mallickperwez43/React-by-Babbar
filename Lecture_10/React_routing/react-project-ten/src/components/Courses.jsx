import React from 'react'

const Courses = () => {
    return (
        <div className="flex justify-center px-4">
            <div className="w-full max-w-md bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl animate-fade-in">
                <h2 className="text-2xl font-bold text-amber-400 mb-4 text-center">Courses</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li className="hover:text-amber-500 transition">React Basics</li>
                    <li className="hover:text-amber-500 transition">MERN Stack</li>
                    <li className="hover:text-amber-500 transition">DSA Advanced</li>
                </ul>
            </div>
        </div>
    )
}

export default Courses
