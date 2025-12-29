import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';

// step 1 : create context
const UserContext = createContext();

// step 2 : wrap all the child inside a provider

// step 3 : pass value

// step 4 : consumer ke andar jake consume karlo

// example - 1
const ThemeContext = createContext();

function App() {
  const [user, setUser] = useState({ name: "Love" });
  const [theme, setTheme] = useState("light");

  return (
    < UserContext.Provider value={{ user, setUser }} > {/*step 2 & 3*/}
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={`min-h-screen flex justify-center items-center transition-all duration-300 ${theme === "light"
          ? "bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500"
          : "bg-linear-to-br from-gray-900 via-gray-800 to-black"
          }`}>
          <div className={`w-full max-w-md rounded-2xl p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 ${theme === "light"
            ? "bg-white/30 text-white"
            : "bg-white/10 text-gray-200"
            }`}>
            <h1 className='text-2xl font-bold text-center mb-4'>
              User + Theme Context Demo
            </h1>
            <ChildA />
          </div>
        </div>
      </ThemeContext.Provider>
    </UserContext.Provider >
  )
}

export default App
export { UserContext }
export { ThemeContext }
