import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Meta from '../components/Meta'
import Button from '../components/Button'
import Projects from '../components/Projects'
import { useState } from 'react'

export default function Home() {

  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Mind Bot app",
      madeFrom: "Expo app",
      picture: "mindbot.png",
      phone: true,
      link: "mindbot",
    },
    {
      id: 2,
      name: "Mutual Aid Website",
      madeFrom: "Node.js",
      picture: "ma.png",
      phone: false,
      link: "mutual-aid",
    },
    {
      id: 2,
      name: "Citi Bank Helper",
      madeFrom: "Python Tkinter",
      picture: "citi.png",
      phone: false,
      link: "citi-bank",
    },
    {
      id: 2,
      name: "Deadwood Game",
      madeFrom: "JavaFX",
      picture: "deadwood.png",
      phone: false,
      link: "deadwood",
    },
  ])


  return (
    
    <div className={styles.pageBody}>
      
      <Meta title='Roberto Palma' />

      <div className={styles.titleContainer}>

          <img src='/images/selfieborder.png'></img>
          <h1>Roberto Palma</h1>
          <h2>computer science graduate</h2>
          <Button text='See more'></Button>
      </div>
      <a id="projects"></a>

      <div className={styles.projects}> 
        <Projects
          projects={projects} />
      
      
      </div>


    </div>
    

    
  )
}
