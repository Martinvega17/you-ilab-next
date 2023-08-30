import React from 'react';
import data from '../../../../db.json';
import Image from 'next/image';

const Projects = () => {
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
                {/* Mapping over the data from db.json */}
                {data.map(project => (
                    <div key={project.id} className="project-card">
                        <h3 className='font-semibold text-6xl text-projectsTitle text-center my-8'>{project.title}</h3>
                        <p className='ml-6'>{project.description}</p>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
