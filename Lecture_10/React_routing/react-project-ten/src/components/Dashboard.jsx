import React from 'react'
import { Outlet, NavLink } from "react-router-dom"

const Dashboard = () => {
    const linkClass = ({ isActive }) =>
        `px-4 py-2 rounded-md font-semibold transition
     ${isActive ? "bg-amber-500 text-white" : "text-gray-700 hover:bg-gray-200"}`

    return (
        <div className="min-h-[calc(100vh-64px)] bg-purple-50 p-6 flex flex-col items-center">
            <h1 className="text-3xl font-black text-amber-400 mb-6">Dashboard</h1>

            {/* Dashboard navigation */}
            <div className="flex gap-4 mb-8">
                <NavLink to="courses" className={linkClass}>Courses</NavLink>
                <NavLink to="mock-tests" className={linkClass}>Mock Tests</NavLink>
                <NavLink to="reports" className={linkClass}>Reports</NavLink>
            </div>

            {/* Nested content centered */}
            <div className="flex justify-center w-full">
                <div className="w-full max-w-md">
                    <Outlet /> {/* This renders welcome card or selected section */}
                </div>
            </div>
        </div>
    )
}

export default Dashboard
