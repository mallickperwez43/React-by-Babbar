import React, { useContext } from 'react'
import { UserContext, ThemeContext } from '../App';

const ChildC = () => {
    const { user, setUser } = useContext(UserContext);
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const toggleUser = () => {
        setUser((prev) => ({
            name: prev.name === "Love" ? "React Dev" : "Love",
        }));
    };

    const isLove = user.name === "Love";

    return (
        <div className="mt-4 flex flex-col items-center gap-4">
            {/* USER SECTION */}
            <div className="text-center">
                <p className="text-sm opacity-80">Active User</p>
                <span className="text-xl font-bold transition-all duration-300">
                    {user.name}
                </span>
            </div>

            <button
                onClick={toggleUser}
                className={`px-5 py-2 rounded-xl font-semibold transition-all duration-300 ${isLove
                    ? "bg-emerald-600 text-white hover:bg-emerald-700"
                    : "bg-orange-500 text-white hover:bg-orange-600"
                    }`}
            >
                Switch to {isLove ? "React Dev" : "Love"}
            </button>

            {/* THEME SECTION */}
            <div className="pt-3 border-t border-white/20 w-full text-center">
                <p className="text-sm opacity-80">Current Theme</p>
                <span className="text-lg font-bold capitalize">{theme}</span>

            </div>

            <button
                onClick={toggleTheme}
                className={`mt-3 px-5 py-2 rounded-xl font-semibold transition-all duration-300 ${theme === "light"
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-gray-200 text-black hover:bg-white"
                    }`}
            >
                Switch to {theme === "light" ? "Dark" : "Light"} Mode
            </button>
        </div>
    )
}

export default ChildC
