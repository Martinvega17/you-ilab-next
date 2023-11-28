"use client";


import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Toaster, toast } from "sonner";


const reCaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;



export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [isCaptchaValid, setCaptchaValid] = useState(false); // Estado para el captcha

    const onChange = (value) => {
        if (value) {
            setCaptchaValid(true); // Marca el captcha como válido
        } else {
            setCaptchaValid(false); // Marca el captcha como no válido
        }
    };

    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);

        const data = {
            name: String(event.target.name.value),
            email: String(event.target.email.value),
            phone: String(event.target.phone.value),
            message: String(event.target.message.value),
        };

        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            console.log("Message sent successfully");
            setLoading(false);

            // reset the form
            event.target.name.value = "";
            event.target.email.value = "";
            event.target.phone.value = "";
            event.target.message.value = "";
        }
        if (!response.ok) {
            console.log("Error sending message");
            setLoading(false);
        }
    }

    function verifyEmpty(e) {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        if (name.trim() === "" || email.trim() === "" || phone.trim() === "" || message.trim() === "" || !isCaptchaValid) {
            e.preventDefault();
            toast.error("Por favor llena todos los campos y verifica el captcha");
        } else {
            toast.success("Mensaje enviado con éxito");

        }
    }

    return (
        <section>
            <div className="pt-2 pb-12 md:px-8 px-4 md:mx-4 mx-auto max-w-screen-md bg-[#F6F6F6] rounded-xl">
                <h2 className="mt-20 md:mt-20 sm:mt-20 mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-gray-900">
                    Contacta a un representante
                </h2>

                <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                    <div>
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600"
                            htmlFor="name"
                        >
                            Nombre Completo
                        </label>
                        <input
                            type="text"
                            minLength={3}
                            maxLength={150}
                            required
                            className="shadow-sm bg-[#D9D9D9] border border-[#8A8A8A] text-[#8A8A8A] font-semibold text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light mb-2"
                            autoComplete="off"
                            id="name"
                            placeholder="Nombre"
                        />
                    </div>
                    <div>
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600"
                            htmlFor="email"
                        >
                            Correo
                        </label>
                        <input
                            type="email"
                            minLength={5}
                            maxLength={150}
                            required
                            className="shadow-sm bg-[#D9D9D9] border border-[#8A8A8A] text-[#8A8A8A] font-semibold text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light mb-2"
                            autoComplete="off"
                            id="email"
                            placeholder="Correo"
                        />
                    </div>
                    <div>
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600"
                            htmlFor="phone"
                        >
                            Telefono
                        </label>
                        <input
                            type="tel"
                            pattern="[0-9]*"
                            maxLength="10"
                            required
                            className="shadow-sm bg-[#D9D9D9] border border-[#8A8A8A] text-[#8A8A8A] font-semibold text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light mb-2"
                            autoComplete="off"
                            id="phone"
                            placeholder="Telefono"
                        />
                    </div>


                    <div className="col-span-2">
                        <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600"
                        >
                            Mensaje
                        </label>
                        <textarea
                            id="message"
                            rows="6"
                            className="shadow-sm bg-[#D9D9D9] border border-[#8A8A8A] text-[#8A8A8A] font-semibold text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light mb-6"
                            placeholder="Deja tu mensaje aqui"
                            required
                        />
                    </div>
                    <div className="col-span-2">
                        <ReCAPTCHA
                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="col-span-2">
                        <Toaster richColors />
                        <button
                            type="submit"
                            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover-bg-primary-700 dark:focus:ring-primary-800 bg-buttonContact"
                            onClick={verifyEmpty}
                        >
                            Enviar mensaje
                        </button>
                    </div>
                </form>

            </div>
        </section>
    );
}