import React, { useEffect, useState } from 'react'

const ResizeComponent = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    // It will run on the first render

    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            <div
                className="px-16 py-14 
                           bg-linear-to-br from-blue-500 to-purple-600 
                           rounded-3xl shadow-xl
                           flex justify-center items-center"
            >
                <div
                    className="backdrop-blur-xl bg-white/10 border border-white/90
                               shadow-2xl px-10 py-8 rounded-3xl text-center"
                >
                    <h1 className="text-white text-4xl font-extrabold tracking-wide drop-shadow-md">
                        Window Width
                    </h1>

                    <p className="text-white text-6xl font-black mt-4 animate-pulse">
                        {windowWidth}px
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ResizeComponent;
