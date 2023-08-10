import React from "react";
import Image from "next/image";

const Error404 = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="text-center w-full max-w-7xl bg-white shadow-lg rounded-lg p-8">
                <div className="flex flex-col">
                    <div className="col-sm-10 col-sm-offset-1 text-center">
                        <div className="bg-auto bg-no-repeat h-96 flex items-center justify-center ml-40" style={{ backgroundImage: "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)" }}>
                            <h1 className="text-center mr-28 text-6xl text-black">404</h1>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-4xl font-bold mb-4">Page not found</h3>
                            <p className="text-xl mb-4">The page you are looking for is not available!</p>
                            <a href="/" className="link_404 bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-400 transition duration-300">
                                Go to Home
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error404;
