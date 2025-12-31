import React from 'react'
import { NavLink } from "react-router-dom"

const Navbar = () => {
    const linkClass = ({ isActive }) =>
        `relative px-5 py-2 text-sm font-semibold tracking-wide transition-all
     after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
     after:bg-blue-500 after:transition-all after:duration-300
     hover:after:w-full
     ${isActive
            ? "text-blue-500 after:w-full"
            : "text-gray-500 hover:text-gray-900"
        }`

    return (
        <header className="sticky top-0 z-50">
            <nav className="mx-auto max-w-7xl px-6">
                <div className="flex h-16 items-center justify-between">

                    {/* Logo */}
                    <div className="text-xl font-black tracking-wide text-gray-900">
                        React<span className="text-blue-500">App</span>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-8">
                        <NavLink to="/" className={linkClass}>Home</NavLink>
                        <NavLink to="/about" className={linkClass}>About</NavLink>
                        <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>
                        <NavLink to="/student" className={linkClass}>Student</NavLink>
                    </div>
                </div>
            </nav>

            {/* Bottom border */}
            <div className="h-px w-full bg-linear-to-r from-transparent via-gray-200 to-transparent" />
        </header>
    )
}

export default Navbar

