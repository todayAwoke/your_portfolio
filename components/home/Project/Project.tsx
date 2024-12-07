import { projectData } from '@/app/Data/data'
import SectionHeading from '@/components/helper/SectionHeading'
import React from 'react'
import ProjectCard from './ProjectCard'

const Services = () => {
    return (
        <div className='pt-16 pb-16 bg-gray-800'>
            <SectionHeading>My Projecs</SectionHeading>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10  w-[80%] mx-auto items-center mt-20' >
                {projectData.map((project) => {
                    return <div key={project.id}>
                        <ProjectCard project={project} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default Services