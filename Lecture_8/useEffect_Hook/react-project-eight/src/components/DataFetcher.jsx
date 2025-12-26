import React, { useEffect, useState } from 'react'

const DataFetcher = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            });
    }, []);
    // It will run only on first render

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-900 px-6 py-10 rounded-2xl max-h-64 overflow-y-scroll">
            {loading ? (
                <h1 className="text-3xl font-bold text-white animate-pulse">
                    Loading...
                </h1>
            ) : (
                <ul className="w-full max-w-2xl space-y-4">
                    {data.map(post => (
                        <li
                            key={post.id}
                            className="p-5 bg-gray-800 rounded-xl shadow-lg border border-gray-700
                                       hover:[box-shadow:0_0_18px_rgba(0,200,255,0.4)]
                                       transition-all duration-300"
                        >
                            <h2 className="text-xl font-bold text-cyan-300 mb-1">
                                {post.title}
                            </h2>
                            <p className="text-gray-300 leading-relaxed">
                                {post.body}
                            </p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DataFetcher;
