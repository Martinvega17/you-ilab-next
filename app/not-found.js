import React from "react";
import Image from "next/image";

const Error404 = () => {
    return (
        <div className="flex flex-row justify-center items-center min-h-screen">
            <div className="text-center max-w-7xl bg-white shadow-lg rounded-lg">
                <section className="page_404 p-8 bg-white font-serif">
                    <div className="">
                        <div className="flex flex-row">
                            <div className=" flex-col">
                                <div className="col-sm-10 col-sm-offset-1  text-center">
                                    <div className="four_zero_four_bg bg-cover h-96 flex items-center justify-center" style={{ backgroundImage: "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)" }}>
                                        <h1 className="text-center text-6xl text-black">404</h1>
                                    </div>
                                    <div className="contant_box_404 mt-8">
                                        <h3 className="text-4xl font-bold mb-4">Look like youre lost</h3>
                                        <p className="text-xl mb-4">the page you are looking for is not available!</p>
                                        <a href="/" className="link_404 bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-400 transition duration-300">
                                            Go to Home
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Error404;
