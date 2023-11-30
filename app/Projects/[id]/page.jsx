import Image from 'next/image'
import Link from 'next/link'
import { FaFilePdf } from "react-icons/fa";

const fetchSinglePost = (id) => {

    return fetch(`https://you-ilab-next.vercel.app/api/projects/${id}`, {
        next: {
            revalidate: 60
        }
    })
        .then(res => res.json())
}

export default async function Post({ params }) {
    const { id } = params;
    let post = null;

    try {
        post = await fetchSinglePost(id);

        if (post) {
            return (
                <article className="ml-2">
                    <title>You I Lab | Projects</title>

                    {/* Gallery */}

                    <h1 className="mt-20 text-5xl text-center font-MontserratBold text-titleAbout dark:text-neutral-300 py-8">
                        {post.title}
                    </h1>
                    <section className="px-4 py-8 sm:py-16 lg:px-24 xl:px-[300px] relative w-[100%]">
                        <section className={`flex-[0_0_${post.logo ? '70' : '100'}%] w-[100%] lg:max-w-[90%] md:max-w-[75%] xl:max-w-[95%] px-0`}>
                            <section className="lg:flex block h-full w-full ">
                                <section className={`max-w-[${post.logo ? '70' : '100'}%] px-4 lg:max-w-[60%] xl:max-w-[60%] `} >
                                    <p className="font-RobotoRegular text-[16px]">{post.sections.section1}</p>
                                </section>
                                {post.logo && (
                                    <section className="md:w-[60%] lg:w-[60%] xl-w-[100%] w-[70%] px-4 block pt-4 justify-center">
                                        <Image src={post.logo} alt={post.title} width={250} height={250} className="mb-10 h-auto max-w-full" />
                                    </section>
                                )}
                            </section>
                        </section>


                        <section className="flex-[0_0_100%] max-w-full relative w-full px-4 mt-10">
                            <p className="font-RobotoRegular text-[16px] ">{post.sections.section2}</p>
                        </section>

                        <section className="flex-[0_0_100%] max-w-full relative w-full px-4 mt-10">
                            <p className="font-RobotoRegular text-[16px]">{post.sections.section3}</p>
                        </section>

                        <section className="flex-[0_0_100%] max-w-full relative w-full px-4 mt-10">
                            <p className="font-RobotoRegular text-[16px]">{post.sections.section4}</p>
                        </section>

                        <section className="flex flex-wrap mx-[-15px] mt-10">
                            <section className="flex-[0_0_50%] max-w-[50%] relative w-full">
                                <section className="flex flex-wrap px-[-15px]">
                                    <section className="flex-[0_0_100%] max-w-full relative w-full px-4">
                                        <section className="w-full">
                                            <Image src={post.images.evidencia1} alt='Evidencia de proyecto' title='Evidencia' width={1500} height={1125} className="mb-10 max-w-full h-auto align-middle" />
                                        </section>
                                    </section>
                                    <section className="flex-[0_0_100%] max-w-full relative w-full px-4">
                                        <section className="w-full">
                                            <Image src={post.images.evidencia2} alt='Evidencia de proyecto' title='Evidencia' width={1500} height={1125} className="mb-10 max-w-full h-auto align-middle" />
                                        </section>
                                    </section>
                                </section>
                            </section>

                            <section className="flex-[0_0_50%] max-w-[50%] relative w-full">
                                <section className="flex flex-wrap px-[-15px]">
                                    <section className="flex-[0_0_100%] max-w-full relative w-full px-4">
                                        <section className="w-full">
                                            <Image src={post.images.evidencia3} alt='Evidencia de proyecto' title='Evidencia' width={1500} height={1125} className="mb-10 max-w-full h-auto align-middle" />
                                        </section>
                                    </section>
                                    <section className="flex-[0_0_100%] max-w-full relative w-full px-4">
                                        <section className="w-full">
                                            <Image src={post.images.evidencia4} alt='Evidencia de proyecto' title='Evidencia' width={1500} height={1125} className="mb-10 max-w-full h-auto align-middle" />
                                        </section>
                                    </section>
                                </section>
                            </section>
                        </section>
                        <section class="flex flex-col items-center space-y-6">
                            <h2 class="text-[#003242] text-5xl lg:text-4xl xl:text-5xl md:text-xl font-MontserratBold">
                                Descargables
                                <span class="text-[#765cf6]">.</span>
                            </h2>

                            <div class="flex space-x-4">
                                {post.downloads.descargable1 && ( // Verifica si descargable1 tiene un valor
                                    <Link href={post.downloads.descargable1} target='_blank' className='font-bold text-white capitalize text-base inline-block relative z-[1] transition-all duration-[0.3s] ease-[ease-in-out] shadow-[0px_8px_16px_0px_rgba(4,142,197,0.3)] pl-10 pr-14 p-4 rounded-[40px] border-0 bg-gradient text-center'>
                                        <span className="flex">
                                            <FaFilePdf className="fa-solid fa-file-pdf text-center mr-2 text-white" />
                                            {post.downloads.title1}
                                        </span>
                                    </Link>
                                )}

                                {post.downloads.descargable2 && ( // Verifica si descargable2 tiene un valor
                                    <Link href={post.downloads.descargable2} target='_blank' className='font-bold  capitalize text-base inline-block relative z-[1] transition-all duration-[0.3s] ease-[ease-in-out] rounded-[40px] text-[#003242] shadow-none no-underline ml-5  px-[38px] py-[15px] border-[#f0f3f4] border-2 border-solid bg-gradient-bef'>
                                        <span className="flex">
                                            <FaFilePdf className="fa-solid fa-file-pdf text-center mr-2 text-[#fb4f52] icon" />
                                            {post.downloads.title2}
                                        </span>
                                    </Link>
                                )}

                                {post.downloads.descargable3 && ( // Verifica si descargable3 tiene un valor
                                    <Link href={post.downloads.descargable3} target='_blank' className='font-bold  capitalize text-base inline-block relative z-[1] transition-all duration-[0.3s] ease-[ease-in-out] rounded-[40px] text-[#003242] shadow-none no-underline ml-5  px-[38px] py-[15px] border-[#f0f3f4] border-2 border-solid bg-gradient-bef'>
                                        <span className="flex">
                                            <FaFilePdf className="fa-solid fa-file-pdf text-center mr-2 text-[#fb4f52] icon" />
                                            {post.downloads.title3}
                                        </span>
                                    </Link>
                                )}

                                {post.downloads.descargable4 && ( // Verifica si descargable4 tiene un valor
                                    <Link href={post.downloads.descargable4} target='_blank' className='font-bold  capitalize text-base inline-block relative z-[1] transition-all duration-[0.3s] ease-[ease-in-out] rounded-[40px] text-[#003242] shadow-none no-underline ml-5  px-[38px] py-[15px] border-[#f0f3f4] border-2 border-solid bg-gradient-bef'>
                                        <span className="flex">
                                            <FaFilePdf className="fa-solid fa-file-pdf text-center mr-2 text-[#fb4f52] icon" />
                                            {post.downloads.title4}
                                        </span>
                                    </Link>
                                )}
                            </div>
                        </section>


                    </section>
                </article>
            )
        } else {
            console.error("La respuesta de la API está vacía o no es válida.");

        }
    } catch (error) {
        console.error("Error al obtener datos del servidor:", error);

    }
}


