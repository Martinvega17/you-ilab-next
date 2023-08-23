"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import projectsData from './projectsData'; // Asegúrate de importar los datos correctamente

const Projects = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showAllProjects, setShowAllProjects] = useState(false);
    const projectsToShow = showAllProjects ? 1000 : 4;

    const toggleProjects = () => {
        setShowAllProjects(!showAllProjects);
        setSearchTerm(''); // Restablecer el término de búsqueda al expandir o reducir proyectos
    };

    const filteredProjects = projectsData.filter(project =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase())
    );





    const projectItems = filteredProjects.map(project => (
        <div key={project.id} className="w-full text-center font-OverPass py-6">
            <h3 className='text-center text-xl ml-4 md:mr-2 text-projectsTitle font-bold hover:underline cursor-pointer pb-4'>
                {project.name}
            </h3>
            <a href={project.link} target="_blank">
                <div className="image-container">
                    <Image
                        src={project.imageSrc}
                        alt={project.name}
                        width={560}
                        height={100}
                        className="imagen border-4 shadow-lg border-projectsTitle hover:border-teal-500 rounded-3xl cursor-pointer dark:grayscale dark:hover:grayscale-0"
                    />
                </div>
            </a>
        </div>
    ));

    return (
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

                <div className="justify-center justify-items-center flex mt-20">
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            placeholder="Buscar proyectos..."
                            className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring focus:border-blue-500 bg-slate-300 pr-10"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                        {searchTerm && (
                            <button
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#999EA4] hover:text-[#999EA4] cursor-pointer"
                                onClick={() => setSearchTerm('')}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                                </svg>
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <div className="mt-4 justify-center items-center flex">
                {/* ... */}
            </div>
            {filteredProjects.length === 0 ? (
                <div className="text-center text-gray-500 my-4">
                    No se encontraron resultados para la búsqueda.
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mx-36">
                    {projectItems.slice(0, projectsToShow)}
                </div>
            )}
            {!showAllProjects ? (
                <div className="text-center my-4">
                    <button
                        className="text-blue-500 hover:underline cursor-pointer"
                        onClick={toggleProjects}
                    >
                        Ver más
                    </button>
                </div>
            ) : (
                <div className="text-center my-4">
                    <button
                        className="text-blue-500 hover:underline cursor-pointer mr-2"
                        onClick={toggleProjects}
                    >
                        Mostrar menos
                    </button>
                </div>
            )}
        </div>
    );
};

export default Projects;