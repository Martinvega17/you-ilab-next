import Image from 'next/image'
const fetchSinglePost = (id) => {

    return fetch(`http://localhost:3000/api/prueba/${id}`, {
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
                    <h1 className="mt-20 text-5xl text-center font-MontserratBold text-titleAbout dark:text-neutral-300">
                        {post.title}
                    </h1>
                    <section className="px-4 py-8 sm:py-16 lg:px-24 xl:px-[300px] flex flex-wrap">
                        <section className={`flex-[0_0_${post.logo ? '100' : '100'}%] max-w-[100%] relative w-full px-0`}>
                            <section className="flex flex-wrap">
                                <section className={`max-w-[${post.logo ? '70' : '100'}%] px-4`}>
                                    <p className="font-RobotoRegular text-[16px]">{post.section1}</p>
                                </section>
                                {post.logo && (
                                    <section className="max-w-[30%] px-4">
                                        <img src={post.logo} alt={post.title} className="mb-10 max-h-40 float-right" />
                                    </section>
                                )}
                            </section>
                        </section>

                        <section className="flex-[0_0_100%] max-w-full relative w-full px-4 mt-10">
                            <p className="font-RobotoRegular text-[16px] ">{post.section2}</p>
                        </section>

                        <section className="flex-[0_0_100%] max-w-full relative w-full px-4 mt-10">
                            <p className="font-RobotoRegular text-[16px]">{post.section3}</p>
                        </section>

                        <section className="flex-[0_0_100%] max-w-full relative w-full px-4 mt-10">
                            <p className="font-RobotoRegular text-[16px]">{post.section4}</p>
                        </section>

                        <section className="flex flex-wrap mx-[-15px] mt-10">
                            <section className="flex-[0_0_50%] max-w-[50%] relative w-full">
                                <section className="flex flex-wrap px-[-15px]">
                                    <section className="flex-[0_0_100%] max-w-full relative w-full px-4">
                                        <section className="w-full">
                                            <img src={post.evidencia1}  className="mb-10 max-w-full h-auto align-middle" />
                                        </section>
                                    </section>
                                    <section className="flex-[0_0_100%] max-w-full relative w-full px-4">
                                        <section className="w-full">
                                            <img src={post.evidencia2}  className="mb-10 max-w-full h-auto align-middle" />
                                        </section>
                                    </section>
                                </section>
                            </section>

                            <section className="flex-[0_0_50%] max-w-[50%] relative w-full">
                                <section className="flex flex-wrap px-[-15px]">
                                    <section className="flex-[0_0_100%] max-w-full relative w-full px-4">
                                        <section className="w-full">
                                            <img src={post.evidencia3}  className="mb-10 max-w-full h-auto align-middle" />
                                        </section>
                                    </section>
                                    <section className="flex-[0_0_100%] max-w-full relative w-full px-4">
                                        <section className="w-full">
                                            <img src={post.evidencia4}  className="mb-10 max-w-full h-auto align-middle" />
                                        </section>
                                    </section>
                                </section>
                            </section>
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


