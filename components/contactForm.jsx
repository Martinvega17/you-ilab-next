"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Toaster, toast } from 'sonner'
import about from '@/assets/footer/about.webp';






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

    const {
        register,
        handleSubmit,
        formState: { errors }, reset } = useForm({
            resolver: zodResolver(formSchema),
        });

    async function onSubmit(values) {
        // TODO: implement
        console.log(values);

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

    return (
        <div className="">
            <div className="about">

                <div
                    className="h-[23rem] sm:h-[20rem] md:h-[18rem] lg:h-[20rem] xl:h-[25rem] w-full flex justify-center items-center"
                    style={{
                        backgroundImage: `url(${about.src})`,
                        backgroundSize: "100% ",
                    }}
                >
                    <div className="container text-center sm:px-2 md:px-4 lg:px-8 py-4">
                        <h1 className="text-white text-3xl lg:text-6xl font-MontserratBold text-center">Contacto</h1>
                    </div>
                </div>
            </div>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-6  px-4 mx-auto max-w-screen-md">
                    <h2 className="mt-2 mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>

                    <form action="#" className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label for="name" htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
                            <input
                                type="text"
                                id="name"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="John Doe" required
                                {...register("name")} />
                            {errors?.name && (
                                <p className="px-1 text-xs text-red-600">
                                    {errors.name.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input
                                type="email"
                                id="email"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="name@flowbite.com"
                                required
                                {...register("email")} />
                            {errors?.name && (
                                <p className="px-1 text-xs text-red-600">
                                    {errors.name.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className="sr-only" htmlFor="phone">
                                Phone
                            </label>

                            <input
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="Phone Number"
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
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                            <textarea
                                id="message"
                                rows="6"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Leave a comment..."
                                {...register("content")}
                            />
                            {errors?.content && (
                                <p className="px-1 text-xs text-red-600">
                                    {errors.content.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <Toaster
                                richColors

                            />
                            <button
                                onClick={() => toast.success('Mensaje enviado correctamente')
                                }
                                type="submit"
                                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-buttonContact"
                            >
                                Send message
                            </button>
                        </div>


                    </form>


                </div>
            </section>
        </div>
    );
}
