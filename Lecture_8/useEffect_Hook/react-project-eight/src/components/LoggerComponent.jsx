import React, { useEffect, useState } from 'react'

const LoggerComponent = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Component rendered or count changed: ${count}`)
    });
    // runs for every render

    return (
        <div className="flex justify-center items-center flex-col gap-4 bg-gray-800 px-8 py-6 rounded-2xl shadow-xl [box-shadow:0_8px_20px_rgba(0,0,0,0.3)]">

            <h1 className="text-3xl font-bold text-transparent bg-clip-text 
                bg-linear-to-r from-blue-400 to-sky-300 
                [text-shadow:0_0_14px_rgba(100,180,255,0.55)] tracking-wide">
                Count: {count}
            </h1>

            <button
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 active:scale-95 transition-all text-white font-semibold rounded-xl shadow-md cursor-pointer"
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>
        </div>
    );
}

export default LoggerComponent;
