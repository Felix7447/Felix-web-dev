"use client"
import React from 'react'

import ProjectCard from '@/components/ProjectCard'

import projects from '@/utils/projects'

import { Portfolio } from '@/types/portfolioTypes'
import Project from '@/types/ProjectTypes'

interface Props {
  portfolio: Portfolio
}

const ProjectGrid: React.FC<Props> = ({ portfolio }) => {
  return (
    <main className='grid grid-cols-12 gap-4 px-10 md:px-16 my-8'>
      {
        projects.map((project: Project) => (
          <ProjectCard key={`projectSection-${project.id}`} dictionary={portfolio} image={project.mainImage} title={project.name} icons={project.techStack} details={project.id} link={project.link} />
        ))
      }
    </main>
  )
}

export default ProjectGrid