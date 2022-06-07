import React from 'react'
import projectStyle from '../styles/Projects.module.scss'

const Project = ({project}) => {
  return (
    <a href={'/projects/' + project.link}>
        <div className={project.phone ? projectStyle.projectM : projectStyle.projectD}>
            <div className={ project.phone ? projectStyle.phone : projectStyle.desktop}>
                <img src={"/images/" + project.picture}></img>
            </div>

            <div className={projectStyle.description}>
                <h3>{project.madeFrom}</h3>
                <h2>{project.name}</h2>
                
            </div>

        </div>
    </a>
  )
}

export default Project