import React, { useEffect, useState } from 'react'

const MultiEffectComponent = () => {
    const [count, setCount] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        console.log(`Count changed : ${count}`);
    }, [count]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="w-full min-h-screen flex justify-center items-center 
                        bg-linear-to-br from-black via-gray-900 to-purple-950 px-4">

            <div
                className="bg-linear-to-br from-gray-900 via-purple-900 to-black
                           p-8 rounded-3xl shadow-2xl backdrop-blur-xl
                           border border-white/10 text-white w-[360px]"
            >
                <h1 className="text-3xl font-extrabold text-center drop-shadow mb-6">
                    Multi Effect Component
                </h1>

                <div className="mb-8 text-center">
                    <h2 className="text-2xl font-bold mb-2">Count: {count}</h2>

                    <button
                        onClick={() => setCount(count + 1)}
                        className="px-5 py-2 rounded-xl 
                                   bg-white/20 hover:bg-white/30 
                                   transition-all font-semibold shadow"
                    >
                        Increment Count
                    </button>
                </div>

                <div className="text-center">
                    <h2 className="text-xl font-semibold opacity-90">
                        Seconds Passed
                    </h2>

                    <p className="text-5xl font-black mt-2 animate-pulse">
                        {seconds}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MultiEffectComponent;
