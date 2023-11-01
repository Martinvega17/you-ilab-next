"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import ReCAPTCHA from "react-google-recaptcha";


import { Toaster, toast } from "sonner";
import React, { useRef, useState, useEffect } from "react";

const reCaptchaKey = process.env.RECAPTCHA_KEY;

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Email must be in proper format",
    }),
    phone: z.string().min(2, {
        message: "Phone number must be at least 2 characters.",
    }),
    content: z.string().min(2, {
        message: "Content must be at least 2 characters.",
    }),
});

export default function ContactForm() {
    const [isCaptchaValid, setCaptchaValid] = useState(false); // Estado para el captcha

    const onChange = (value) => {
        if (value) {
            setCaptchaValid(true); // Marca el captcha como válido
        } else {
            setCaptchaValid(false); // Marca el captcha como no válido
        }
    };


    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(formSchema),
    });

    useEffect(() => {
        reset();
    }, [reset]); // Incluye 'reset' en el arreglo de dependencias si es necesario que este efecto se ejecute cuando 'reset' cambie
    




    async function onSubmit(values, e) {
        // TODO: implement
        e.preventDefault();
        console.log(values);

        e.preventDefault();


        await fetch("/api/send", {
            method: "POST",
            body: JSON.stringify({
                name: values.name,
                email: values.email,
                phone: values.phone,
                content: values.content,
            }),
        });
        reset();
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

            <div className="pt-2 pb-12 md:px-8 px-4 md:mx-4 mx-auto max-w-screen-md bg-[#F6F6F6] dark:bg-[#F6F6F6] rounded-xl">
                <h2 className="mt-20 md:mt-20 sm:mt-20 mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-gray-900">
                    Contacta a un representante
                </h2>

                <form
                    action="#"
                    className="space-y-8"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div>
                        <label
                            for="name"
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600"
                        >
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="shadow-sm bg-[#D9D9D9] border border-[#8A8A8A] text-[#8A8A8A] font-semibold text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="John Doe"
                            {...register("name")}
                        />
                        {errors?.name && (
                            <p className="px-1 text-xs text-red-600">
                                {errors.name.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600"
                        >
                            Correo electronico
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="shadow-sm bg-[#D9D9D9] border border-[#8A8A8A] text-[#8A8A8A] font-semibold text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="name@example.com"
                            rquired
                            {...register("email")}
                        />
                        {errors?.name && (
                            <p className="px-1 text-xs text-red-600">
                                {errors.name.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600"
                            htmlFor="phone"
                        >
                            Telefono
                        </label>

                        <input
                            className="shadow-sm bg-[#D9D9D9] border border-[#8A8A8A] text-[#8A8A8A] font-semibold text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="55 8452 9632"
                            type="tel"
                            id="phone"
                            {...register("phone")}
                        />

                        {errors?.phone && (
                            <p className="px-1 text-xs text-red-600">
                                {errors.phone.message}
                            </p>
                        )}
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600"
                        >
                            Mensaje
                        </label>
                        <textarea
                            id="message"
                            rows="6"
                            className="shadow-sm bg-[#D9D9D9] border border-[#8A8A8A] text-[#8A8A8A] font-semibold text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="Deja tu mensaje aqui"
                            {...register("content")}
                        />
                        {errors?.content && (
                            <p className="px-1 text-xs text-red-600">
                                {errors.content.message}
                            </p>
                        )}
                    </div>
                    <div className="w-full max-w-screen-md mx-auto">
                        <ReCAPTCHA

                            sitekey="6LdTQpAoAAAAAOKsjIrC459kVMW6ZSrxUvJO7KTW"
                            onChange={onChange}
                        />
                    </div>


                    <div>
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
