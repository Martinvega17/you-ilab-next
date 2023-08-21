"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import projectsData from './projectsData'; // Asegúrate de importar los datos correctamente

const Projects = () => {
    const [showAllProjects, setShowAllProjects] = useState(false);
    const projectsToShow = showAllProjects ? 1000 : 4;

    const toggleProjects = () => {
        setShowAllProjects(!showAllProjects);
    };

    const projectItems = projectsData.map((project) => ( // Usa projectsData en lugar de projectData
        <div key={project.id} className="w-full text-center font-OverPass py-6">
            <h3 className='text-center text-xl ml-4 md:mr-2 text-projectsTitle font-bold hover:underline cursor-pointer pb-4'>
                {project.name}
            </h3>
            <a href={project.link} target="_blank">
                <Image src={project.imageSrc} alt={project.name} width={560} height={100} className="border-4 shadow-lg border-projectsTitle rounded-3xl cursor-pointer" />
            </a>
        </div>
    ));

    return (
        <div>
            <title>You I Lab | Projects</title>
            <div className="about">
                {/* ... */}
            </div>
            <div className="mt-4 justify-center items-center flex">
                {/* ... */}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mx-36">
                {projectItems.slice(0, projectsToShow)}
            </div>
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
