import React from 'react'
import Meta from '../../components/Meta'
import projectStyles from '../../styles/projectPage.module.scss'
const mindbot = () => {
  return (
    <>
    
    
    <div className={projectStyles.pageBody}>

      <Meta title='MindBot Application' />
      
      
      <div className={projectStyles.tContainer}>
      
          <div className={projectStyles.title}>
              <h1>MindBot Application</h1>
              <span className={projectStyles.subtitle}>Researcher • Mobile, browser app • 2019-2022</span>
          </div>

          <div className={projectStyles.titlePhoto}>

            <img src='/images/mindbot2.png'></img>
            <img src='/images/mindbot1.png'></img>
            <img src='/images/mindbot.png'></img>

          </div>
      </div>

      
      <div className={projectStyles.contentContainer}>
            <div className={projectStyles.contentRow}>
              <h2>The Problem</h2>
              <p>Due to the pandemic there was an increase in stress among many people, 
                but as our research showed, it was especially difficult for indiviuals 
                living with autism. Wanting to provide a way to address this increase 
                in stress and anxiety in a healthy way research was done on how we could 
                achieve this.</p>
            </div>

            <div className={projectStyles.contentGallery}>

              <div className={projectStyles.gCont}>
                  <img src='/images/mindbotGraph.png'></img>
                  <p>Participants that were interviewed</p>
              </div>

              <div className={projectStyles.gCont}>
                <img src='/images/mindbotAtlas.png'></img>
                <p>Program for qualitative research or qualitative data analysis.</p>
              </div>

              
              


            </div>
            <div className={projectStyles.contentRow}>
              <h2>The Research</h2>
              <p>There was research done involving 15 participants that were asked about
                 the stress in their daily lives, how the pandemic afftected them, what
                  they did to cope, and also their thoughts on our prototype that we had
                   made. All these findings interviews were analyzed in Atlas.ti where 
                   they were coded and analyzed further.

                  <br></br><br></br> The initial research provided us with three main pages that we
                   wanted to include in the main design.
                   </p>
            </div>

            <div className={projectStyles.contentPhotos}>
                <div className={projectStyles.pCont}>
                  <img src='/images/mbIcon1.png'></img>
                  <h3>Mindfulness Page</h3>
                  <p>Breathe in... now breathe out. This page is intended to allow 
                    users to practice mindfulness. The idea was to offer a guided practices
                    in the form of videos or podcasts that allowed users to work on their
                    mental health each day.
                  </p>
                </div>
                <div className={projectStyles.pCont}>
                  <img src='/images/mbIcon2.png'></img>
                  <h3>ChatBot Page</h3>
                  <p>How was your day? Utilizing the technologies that currently exist we can
                    offer users for mental relief. Most people find it very helpful to have 
                    someone to talk to about thier day and how they are feeling. Having an
                    AI Chatbot could help users destress without worring about privacy.
                    </p>
                </div>
                <div className={projectStyles.pCont}>
                  <img src='/images/mbIcon3.png'></img>
                  <h3>Instant Page</h3>
                  <p>Sometimes there are emergency situations where you need immediate help.
                    We did not know exactly what would go here but it was decided that this
                    could be a great help for users. 
                  </p>
                </div>

            </div>

            <div className={projectStyles.contentRow}>
              <p>  While doing these interviews before and during development we introduced 
                   some of features that we saw as most beneficial: The requested features 
                   include:
                   
                   </p>

              <ul>
              <li><b>Personalization:</b> Where users would be able to customize their 
                   experience.
                </li>
                <li><b>Conveying emotion:</b> Sending emotions with messages to better understand the 
                   context to conversations between the chatbot.
                </li>
                <li>
                <b>Natural Conversation:</b> A human like conversation with a chatbot, that would mimic 
                   like having a text conversation with a friend.
                </li>
                <li>
                <b>Nature-like:</b> Lastly having a natural
                    feel and relaxed aesthetic to the app.
                </li>
              </ul>

              <p>These findings and
                     conversations have been articulated into a research paper that is 
                     currently being finalized.</p>
            </div>

            <div className={projectStyles.contentGallery}>

            <div className={projectStyles.gCont}>
              <img src='/images/mbp1.png'></img>
            </div>

            <div className={projectStyles.gCont}>
              <img src='/images/mbp2.png'></img>
            </div>

            <div className={projectStyles.gCont}>
              <img src='/images/mbp3.png'></img>
              
            </div>

            <p>Prototype pages for the app</p>

            </div>


          </div>

      </div>

      </>
    
  )
}

export default mindbot