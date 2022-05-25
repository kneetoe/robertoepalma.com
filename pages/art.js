import React from 'react'
import Meta from '../components/Meta'
import artStyles from '../styles/Art.module.scss'
import BSApp from '../components/BSApp.js'

const art = () => {

  return (
    <div className={artStyles.pageBody}>

        <Meta title='Art' />

        <div className={artStyles.tContainer}>
            <div className={artStyles.title}>
                <h1>Art</h1>
                <p>Some art projects that I do on my own time or that I have done for drawing
                    courses I had taken. A sneak peak into my <b>creative</b> side.
                </p>
            </div>

            <div className={artStyles.scrollD}>
                <p>scroll down &#8595;</p>

            </div>

            



            
        </div>


        {/* <div className={artStyles.artContainer}>
                <div className={artStyles.artwork + " " + artStyles.s1}>
                    <a><img src='/images/art_01.png'></img></a>
                </div>
                <div className={artStyles.artwork + " " + artStyles.s2}>
                    <img src='/images/art_02.png'></img>
                    <div className={artStyles.img}></div>
                </div>
                <div className={artStyles.artwork + " " + artStyles.s3}>
                    <img src='/images/art_03.png'></img>
                </div>

        </div> */}

        <div>
            <BSApp/> 
        </div>


    </div>
  )
}

export default art