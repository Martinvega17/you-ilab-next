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
                <article className="ml-2 ">
                    <h1 className="mt-20 text-5xl text-center font-MontserratBold text-titleAbout dark:text-neutral-300">{post.title}</h1>
                    <div className="px-4 py-8 sm:py-16 lg:px-24 xl:px-[300px]">
                        <div className="">
        
                            <div className="float-right ">
                                <img src={post.logo} alt="" className="mb-10 align-middle max-h-40 float-left" />
                            </div>
                            <p className=''>{post.mainSection}</p>
        
        
                        </div>
        
                        <picture className='flex flex-wrap mx-[-15px] mt-10'>
                            <div className="flex-[0_0_50%] max-w-[50%] relative w-full ">
                                <div className="flex flex-wrap px-[-15px]">
                                    <div className="flex-[0_0_100%] max-w-full relative w-full px-4">
                                        <div className="w-full">
                                            <img src={post.evidencia1} alt="" className="mb-10 max-w-full h-auto align-middle" />
                                        </div>
                                    </div>
                                    <div className="flex-[0_0_100%] max-w-full relative w-full px-4">
                                        <div className="w-full">
                                            <img src={post.evidencia2} alt="" className="mb-10 max-w-full h-auto align-middle" />
                                        </div>
                                    </div>
                                </div>
                            </div>
        
        
        
                            <div className="flex-[0_0_50%] max-w-[50%] relative w-full ">
                                <div className="flex flex-wrap px-[-15px]">
                                    <div className="flex-[0_0_100%] max-w-full relative w-full px-4">
                                        <div className="w-full">
                                            <img src={post.evidencia3} alt="" className="mb-10 max-w-full h-auto align-middle" />
                                        </div>
                                    </div>
                                    <div className="flex-[0_0_100%] max-w-full relative w-full px-4">
                                        <div className="w-full">
                                            <img src={post.evidencia4} alt="" className="mb-10 max-w-full h-auto align-middle" />
                                        </div>
                                    </div>
                                </div>
                            </div>
        
        

                        </picture>
        
                    </div>
                </article>
            )
        } else {
            console.error("La respuesta de la API está vacía o no es válida.");
            // Puedes manejar el error de alguna forma apropiada aquí.
        }
    } catch (error) {
        console.error("Error al obtener datos del servidor:", error);
        // Puedes manejar los errores de red u otros errores aquí.
    }
}


