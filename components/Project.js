import React from 'react'
import projectStyle from '../styles/Projects.module.scss'
import Image from 'next/image'

const Project = ({project}) => {

  const projectLink = project.link.indexOf('https') ? ('/projects/' + project.link) :  project.link
  return (
    <div className={(project.published ? "" : projectStyle.unpublished)}>
      <div className={projectStyle.overlay}>
        <h2>Coming Soon</h2>
      </div>
      <a href={projectLink}>
          <div className={(project.phone ? projectStyle.projectM : projectStyle.projectD)
          
            }>
              <div className={ project.phone ? projectStyle.phone : projectStyle.desktop}>
                  {/* <img src={"/images/" + project.picture}></img> */}

                  <div className={projectStyle.projectImg}>
                  <Image layout='responsive' src={"/images/" + project.picture} 
                  height={project.phone ? 768 : 440} 
                  width={project.phone ? 358 : 769}
                  
                  
                  />
                  </div>
              </div>

              <div className={projectStyle.description}>
                  <h3>{project.madeFrom}</h3>
                  <h2>{project.name}</h2>
                  
              </div>

          </div>
      </a>
    </div>
  )
}

export default Project