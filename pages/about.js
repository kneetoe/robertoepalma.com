import React from 'react'
import aboutStyle from '/styles/About.module.scss'
import Meta from '../components/Meta'

import treeStyle from '/styles/Tree.module.scss'
import Button from '../components/Button'
import Form from '../components/Form'
import Image from 'next/image'


const about = () => {
  return (
    <>
    <div className={aboutStyle.pageBody}>

    <Meta title='About Me' />


    <div className={aboutStyle.tBlock}>
        

        <div className={aboutStyle.tContainer}>
            <div className={aboutStyle.imageContainer}>
                <Image src='/images/rowingme.jpg' layout='responsive' width={500} height={500}/>
            </div>
            
            <div className={aboutStyle.tText + " " + aboutStyle.slidein} >
                <h1>Hello!</h1>
            
                <div className={aboutStyle.subtitle}>
                    <p>I&#39;m Roberto, a Computer Science graduate from the Portland Oregon metropolis area</p>
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

                <span>Clark College</span>
                <div className= {aboutStyle.major_date}>
                    <div className = {aboutStyle.major}>
                    Associate in the Arts
                    </div>
                    <div className = {aboutStyle.job_date}>
                        2016 - 2018
                    </div>
                </div>
            </div>

            
            
        </div>

        
        

    </div>

    <div className={aboutStyle.sectionLine}></div>

    <div className={aboutStyle.aboutWeb}>
            <h1>About this website</h1>
            <div className={aboutStyle.tree}>


                <div className={treeStyle.tree + " " + aboutStyle.treeList + " tree"}>
                    <ul>
                        <li>
                            <a href='#tree'>App.js</a>
                            <ul>
                                <li>
                                    <a href="#tree">Layout</a>
                                    <ul>
                                        <li>
                                            <a href="#tree">Meta.js</a>
                                            
                                        </li>
                                        <li>
                                            <a href="#tree">Nav.js</a>
                                        </li>
                                        <li>
                                            <a href="#tree">Pages</a>
                                            <ul>
                                                <li>
                                                    <a href="#tree">Index.js (home) </a>
                                                    <ul>
                                                        <li>
                                                            <a href="#tree">Projects.js</a>
                                                            <ul>
                                                                <li>
                                                                    <a href="#tree">Project.js</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="#tree">Button.js</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#tree">Art</a>
                                                    <ul>
                                                        <li>
                                                            <a href="#tree">ArtDisplayer.js</a>
                                        
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#tree">Projects</a>
                                                    
                                                </li>
                                            </ul>
                                        </li>
                                        
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className={aboutStyle.credit}>
                    credit to <a href='https://codepen.io/joellesenne'>
                        @joellesenne</a>

                </div>

            </div>

            <p className={aboutStyle.mobile}>
                To view this diagram in access this page on a non-mobile device.
            </p>

            <p>This website was built using the Next.js which is a React Framework that is 
                rising in popularity. Learn about some of the components that I used on each
                 website</p>


    </div>

    <div className={aboutStyle.sectionLine}></div>

    <div className={aboutStyle.places}>
        <div className={aboutStyle.title}>
            <h1>Places I&#39;ve been</h1>
            <div className={aboutStyle.imageContainer}>
                <Image src='/images/star.png' layout='responsive' width={50} height={50}/>
            </div>
            

        </div>

        
            
        <p>One of the one my favorite hobbies is traveling. I have been very fortunate and blessed
                to be able to travel as much as I do. Every place I go builds up a part of me. It
                influences how I see the culture I grew up with and be open and willing to learn
                more about the different cultures around me. I have been to 10 countries and have 
                enjoyed each one of them. I have created a small collage of every country I have 
                visited, and you are welcome to view it if you have some spare time.</p>

        <div className={aboutStyle.imageContainer2}>
            <Image src='/images/countries.png' layout='responsive' width={2024} height={806}/>
        </div>
        {/* <img src='/images/countries.png'></img> */}

        <Button link="/photoalbum" text='View Photo Album'></Button>
    </div>

    <div className={aboutStyle.sectionLine}></div>


    <div className={aboutStyle.formSection}>
        <h1>Contact me</h1>

        <div className={aboutStyle.content}>
            <div className={aboutStyle.contactPhoto}>
                <div className={aboutStyle.imageContainer}>
                    <Image src='/images/camas.jpg' 
                    layout='fill' 
                    
                    quality={300} unoptimized 
                    objectFit='cover'/>
                    {/* <img src='images/camas.jpg'></img> */}
                </div>
                
                <p>My home town in Camas WA</p>
            </div>
            
            <div className={aboutStyle.form}>
                <Form></Form>
            </div>
        </div>

    </div>

    <div className={aboutStyle.sectionLine}></div>

    

</div>

    </>
  )
}

export default about