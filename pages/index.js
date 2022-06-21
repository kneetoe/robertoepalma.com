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
      published: true,
    },
    // {
    //   id: 2,
    //   name: "Mutual Aid Website",
    //   madeFrom: "Node.js",
    //   picture: "ma.png",
    //   phone: false,
    //   link: "https://sites.google.com/view/mutualaidcsci436/home",
    //   published: false,
    // },
    // {
    //   id: 3,
    //   name: "Citi Bank Helper",
    //   madeFrom: "Python Tkinter",
    //   picture: "citi.png",
    //   phone: false,
    //   link: "citi-bank",
    //   published: false,
    // },
    // {
    //   id: 4,
    //   name: "Deadwood Game",
    //   madeFrom: "JavaFX",
    //   picture: "deadwood.png",
    //   phone: false,
    //   link: "deadwood",
    //   published: false,
    // },
  ])


  return (
    
    <div className={styles.pageBody}>
      
      <Meta title='Roberto Palma' />

      <div className={styles.titleContainer}>

          <div className={styles.portraitImg}>
          <Image layout='responsive' src='/images/me.jpg' height={284} width={284}/>
          </div>
          
          {/* <img src='/images/me.jpg'/> */}
          <h1>Roberto Palma</h1>
          <h2>computer science graduate</h2>
          {/* <Button link="/#projects"text='See more'></Button> */}
          <a id="projects"></a>
      </div>

      <div className={styles.projectAnchor}></div>
      <div className={styles.projectContainer}>
      
        <h3>Projects</h3>
      </div>
      

      <div className={styles.projects}> 
        <Projects
          projects={projects} />
      
      
      </div>


    </div>
    

    
  )
}

