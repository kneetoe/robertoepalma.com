import React from 'react'
import aboutStyle from '/styles/About.module.scss'
import Meta from '../components/Meta'


const about = () => {
  return (
    <>
    <div className={aboutStyle.pageBody}>

    <Meta title='MindBot Application' />


    <div className={aboutStyle.tBlock}>
        

        <div className={aboutStyle.tContainer}>
            <img src='/images/rowingme.jpg'></img>
            <div className={aboutStyle.tText + " " + aboutStyle.slidein} >
                <h1>Hello!</h1>
            
                <div className={aboutStyle.subtitle}>
                    <p>I’m Roberto, a Computer Science graduate from the Portland Oregon metropolis area</p>
                </div>
                <div className={aboutStyle.paragraph}>
                    <p>I am an eager computer science graduate looking for career oppertunities around me. Specifically in a software Engineer position, or in Web Development

                    <br/><br/>I spend my time studying algorithm questions and learning new technologies. I love coding things that have a practical use and look forward to working with a team soon.

                    <br/><br/>When I am away from my desk, I tend to be working on art, hanging with friends and family, watching movies, wandering the forest.</p>
                </div>
            </div>

            
        </div>
    </div>

    <div className={aboutStyle.sectionLine}></div>

    <div className={aboutStyle.experience_education}>

        <div className={aboutStyle.experience}>
            <h1>Experience</h1>
            <div className={aboutStyle.edBody}>
                <span>NEAT Research Lab</span>
                <div className= {aboutStyle.position_date}>
                    <div className = {aboutStyle.job_position}>
                        Undergraduate Research Assistant
                    </div>
                    <div className = {aboutStyle.job_date}>
                        2018 - 2022
                    </div>
                </div>
            </div>

        </div>

        <div className={aboutStyle.education}>
            <h1>Education</h1>
            <div className={aboutStyle.exBody}>
                <span>Western Washington University</span>
                <div className= {aboutStyle.major_date}>
                    <div className = {aboutStyle.majors}>
                        <div>Bachelors of Science</div>
                        <div>Minor in Mathematics</div>
                       
                    </div>
                    <div className = {aboutStyle.job_date}>
                        2018 - 2022
                    </div>
                </div>

                <span>NEAT Research Lab</span>
                <div className= {aboutStyle.major_date}>
                    <div className = {aboutStyle.major}>
                        Undergraduate Research Assistant
                    </div>
                    <div className = {aboutStyle.job_date}>
                        2018 - 2022
                    </div>
                </div>
            </div>

            
            
        </div>
        

    </div>

    <div className={aboutStyle.sectionLine}></div>

</div>

    </>
  )
}

export default about