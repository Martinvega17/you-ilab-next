"use client"
import Head from "next/head";
import { useState } from "react";



export default function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState([]);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Name", name);
        console.log("Email", email);
        console.log("Message", message);

        const res = await fetch("api/reload", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                message,
            }),
        });

        const { msg, success } = await res.json();
        setError(msg);
        setSuccess(success);

        if (success) {
            setName("");
            setEmail("");
            setMessage("");
        }
    };



    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated" />
                <link rel="icon" href="/youilab_logo.svg" />
            </Head>

            <main className="h-screen flex items-center justify-center bg-contact">
                <form onSubmit={handleSubmit} className="bg-white flex rounded-lg w-1/2 font-latoRegular">
                    <div className="flwx-1 text-gray-700 p-20">
                        <h1 className="text-3xl pb-2 font-latoBold">Lets get started 👋 </h1>
                        <p className="text-lg text-gray-500">
                            Join our E-learning platform today and unlock over 500+ courses and digital asset ready to download
                        </p>
                        <div className="mt-6">
                            {/* Name input field */}
                            <div className="pb-4">
                                <label
                                    className="block font-latoBold text-sm pb-2"
                                    htmlFor="name">
                                    Name
                                </label>
                                <input
                                    onChange={e => setName(e.target.value)}
                                    className="border-2 border-gray-500 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500 "
                                    type="text"
                                    value={name}
                                    name="name"
                                    placeholder="Enter your name" />
                            </div>
                            {/* Email input field */}
                            <div className="pb-4">
                                <label
                                    className="block font-latoBold text-sm pb-2"
                                    htmlFor="email">
                                    Email
                                </label>
                                <input
                                    onChange={e => setEmail(e.target.value)}
                                    className="border-2 border-gray-500 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500 "
                                    type="email"
                                    name="email"
                                    value={email}
                                    placeholder="Enter your email" />
                            </div>
                            {/* Message input field */}
                            <div className="pb-4">
                                <label
                                    className="block font-latoBold text-sm pb-2"
                                    htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    onChange={e => setMessage(e.target.value)}
                                    className="border-2 border-gray-500 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500 "
                                    value={message}
                                    name="message"
                                    placeholder="Type your message here..." />
                            </div>
                            {/* Terms of service */}
                            <div className="pb-4">
                                <label
                                    className="block font-latoBold text-sm pb-2"
                                    htmlFor="terms">
                                    Terms of service
                                </label>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" name="terms" value="checked" className="h-5 w-5 text-teal-500 border-2 focus:border-teal-500 focus:ring-teal-500" />
                                    <p className="text-sm font-latoBold text-gray-500">
                                        I agree to the Terms and Service that my data will be taken and sold
                                    </p>
                                </div>
                            </div>
                            <button type="submit" className="bg-teal-500 font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-full hover:bg-teal-300">Start learning today!</button>
                        </div>
                        <div className="bg-slate-100 flex flex-col">
                            {error &&
                                error.map((e, index) => (
                                    <div
                                        key={index} // Agrega la prop key con un valor único
                                        className={`${success ?
                                                "text-green-800"
                                                : "text-red-600"
                                            } px-5 py-2`} >
                                        {e}
                                    </div>
                                ))}
                            {success && (
                                <div className="text-green-800 px-5 py-2">Form submitted successfully!</div>
                            )}
                        </div>

                    </div>
                </form>
            </main>
        </div>
    );
}
