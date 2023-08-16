import Image from "next/image"
import img1 from '../assets/projects/logo_centinela.png'

const Projects = () => {
    return(
        <div>
            <title>You I Lab | Projects</title>
            <div className="about">
                <div
                    className="container-fluid p-24 w-full h-full"
                    style={{
                        backgroundColor: '#02d3bf',
                        background: 'linear-gradient(90deg, rgba(71, 118, 230, 1) 0%, rgba(142, 84, 233, 1) 100%)',
                    }}
                >
                    <h2 className="text-right text-5xl text-white mr-24">Proyectos</h2>

                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mx-36">
    <div className="w-full text-center font-OverPass py-6">
        {/* Contenido de la primera columna */}
        <h3 className='text-center text-xl ml-4 md:mr-2 text-projectsTitle font-bold hover:underline cursor-pointer pb-4'>Centinela del Aire</h3>
        <Image src={img1}  alt="" className="border-4 shadow-lg border-projectsTitle rounded-3xl"></Image>
    </div>
    <div className="w-full text-center font-OverPass py-6">
        {/* Contenido de la segunda columna */}
        <h3 className='text-center text-xl ml-4 md:mr-2 text-projectsTitle font-bold hover:underline cursor-pointer pb-4'>WeNet Mexico</h3>
        <Image src={img1} alt="" className="border-4 shadow-lg border-projectsTitle rounded-3xl"></Image>
    </div>
    <div className="w-full text-center font-OverPass py-6">
        {/* Contenido de la tercera columna */}
        <h3 className='text-center text-xl ml-4 md:mr-2 text-projectsTitle font-bold hover:underline cursor-pointer pb-4'>Centinela de la Salud</h3>
        <Image src={img1} alt="" className="border-4 shadow-lg border-projectsTitle rounded-3xl"></Image>
    </div>
    <div className="w-full text-center font-OverPass py-6">
        {/* Contenido del cuarto elemento (debajo del tercero) */}
        <h3 className='text-center text-xl ml-4 md:mr-2 text-projectsTitle font-bold hover:underline cursor-pointer pb-4'>C-SEF</h3>
        <Image src={img1} alt="" className="border-4 shadow-lg border-projectsTitle rounded-3xl"></Image>
    </div>
    <div className="w-full text-center font-OverPass py-6">
        {/* Contenido del cuarto elemento (debajo del tercero) */}
        <h3 className='text-center text-xl ml-4 md:mr-2 text-projectsTitle font-bold hover:underline cursor-pointer pb-4'>Muframex</h3>
        <Image src={img1} alt="" className="border-4 shadow-lg border-projectsTitle rounded-3xl"></Image>
    </div>
    <div className="w-full text-center font-OverPass py-6">
        {/* Contenido del cuarto elemento (debajo del tercero) */}
        <h3 className='text-center text-xl ml-4 md:mr-2 text-projectsTitle font-bold hover:underline cursor-pointer pb-4'>Horoizonte Saludable</h3>
        <Image src={img1} alt="" className="border-4 shadow-lg border-projectsTitle rounded-3xl"></Image>
    </div>
    <div className="w-full text-center font-OverPass py-6">
        {/* Contenido del cuarto elemento (debajo del tercero) */}
        <h3 className='text-center text-xl ml-4 md:mr-2 text-projectsTitle font-bold hover:underline cursor-pointer pb-4'>Juventud al dia</h3>
        <Image src={img1} alt="" className="border-4 shadow-lg border-projectsTitle rounded-3xl"></Image>
    </div>
    <div className="w-full text-center font-OverPass py-6">
        {/* Contenido del cuarto elemento (debajo del tercero) */}
        <h3 className='text-center text-xl ml-4 md:mr-2 text-projectsTitle font-bold hover:underline cursor-pointer pb-4'>Coincidencia Digital</h3>
        <Image src={img1} alt="" className="border-4 shadow-lg border-projectsTitle rounded-3xl"></Image>
    </div>
    <div className="w-full text-center font-OverPass py-6">
        {/* Contenido del cuarto elemento (debajo del tercero) */}
        <h3 className='text-center text-xl ml-4 md:mr-2 text-projectsTitle font-bold hover:underline cursor-pointer pb-4'>Urbis</h3>
        <Image src={img1} alt="" className="border-4 shadow-lg border-projectsTitle rounded-3xl"></Image>
    </div>
    <div className="w-full text-center font-OverPass py-6">
        {/* Contenido del cuarto elemento (debajo del tercero) */}
        <h3 className='text-center text-xl ml-4 md:mr-2 text-projectsTitle font-bold hover:underline cursor-pointer pb-4'>SieNi - PCWO</h3>
        <Image src={img1} alt="" className="border-4 shadow-lg border-projectsTitle rounded-3xl"></Image>
    </div>
    <div className="w-full text-center font-OverPass py-6">
        {/* Contenido del cuarto elemento (debajo del tercero) */}
        <h3 className='text-center text-xl ml-4 md:mr-2 text-projectsTitle font-bold hover:underline cursor-pointer pb-4'>Beyond the Street</h3>
        <Image src={img1} alt="" className="border-4 shadow-lg border-projectsTitle rounded-3xl"></Image>
    </div>
    <div className="w-full text-center font-OverPass py-6">
        {/* Contenido del cuarto elemento (debajo del tercero) */}
        <h3 className='text-center text-xl ml-4 md:mr-2 text-projectsTitle font-bold hover:underline cursor-pointer pb-4'>Mi Casa es su Casa</h3>
        <Image src={img1} alt="" className="border-4 shadow-lg border-projectsTitle rounded-3xl"></Image>
    </div>
    <div className="w-full text-center font-OverPass py-6">
        {/* Contenido del cuarto elemento (debajo del tercero) */}
        <h3 className='text-center text-xl ml-4 md:mr-2 text-projectsTitle font-bold hover:underline cursor-pointer pb-4'>Environmental Restoration Perception</h3>
        <Image src={img1} alt="" className="border-4 shadow-lg border-projectsTitle rounded-3xl"></Image>
    </div>
</div>


        </div>
    )
}
export default Projects