import React from "react";


const Error404 = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-200">
            <div className="text-center">
                <h1 className="text-6xl font-bold mb-4 text-red-500">Error 404</h1>
                <p className="text-2xl text-gray-600 mb-4">Page not found</p>
                <a href="/" className="px-6 py-3 bg-red-500 text-white text-xl rounded-lg shadow-md hover:bg-red-700">
                    Go to Home
                </a>
            </div>
        </div>
    );
};

export default Error404;