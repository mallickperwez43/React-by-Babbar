import React, { useEffect, useState } from 'react'

const TimerComponent = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log("setInterval Executed")
            setSeconds(prev => prev + 1);
        }, 1000);

        return () => {
            console.log("Time to stop")
            clearInterval(intervalId);
        }
    }, []);
    // It will run only on first render

    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    const format = (num) => String(num).padStart(2, '0');

    return (
        <div className="flex justify-center items-center px-10 py-6 rounded-3xl 
                        bg-linear-to-br from-gray-800 via-gray-900 to-black
                        shadow-2xl [box-shadow:0_0_25px_rgba(0,0,0,0.6)]
                        border border-gray-700"
        >

            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text 
                           bg-linear-to-r from-teal-400 to-cyan-300 
                           tracking-widest  
                           [text-shadow:0_0_18px_rgba(0,255,255,0.6)]"
            >

                {format(hrs)}:{format(mins)}:{format(secs)}
            </h1>
        </div>
    );
};

export default TimerComponent;
