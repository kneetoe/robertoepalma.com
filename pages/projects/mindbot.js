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
                living with autism. <br/><br/>Working under the NEAT LAB at Western Washington
                University,
                Ethan Karlinsey, Prab Deol, Kohl Nguyen, and I worked as a team to
                 to provide a way to address this increase in stress and anxiety in a
                  healthy and sustainable way. Research done by Ashima Shrivastava paved
                   the way towards this solution. Ashima, Gabriel Lam, and I
                   researched throughout the process to assist in our implementation.
                    </p>
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
              <p>The research that was done during the implementation involved
                 15 participants. There was a prototype that was made using Figma.
                 The participants were each asked about
                 the stress in their daily lives, how the pandemic afftected them, what
                  they did to cope, and also their thoughts on our prototype that we had
                   made. All the interviews were analyzed in Atlas.ti where 
                   they were coded and analyzed further.

                  <br></br><br></br> The research Ashima had done before we had joined the project
                   provided us with three main pages that were thought to be
                    included in the main design. 
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
                    offer users mental relief. Most people find it very helpful to have 
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

              <div className={projectStyles.gCont3}>
                <img src='/images/mbp1.png'></img>
                <p>Prototype 'Main menu'</p>
              </div>

              <div className={projectStyles.gCont3}>
                <img src='/images/mbp2.png'></img>
                <p>Prototype 'Mindfulness'</p>
              </div>

              <div className={projectStyles.gCont3}>
                <img src='/images/mbp3.png'></img>
                <p>Prototype 'Chat with bot'</p>
                
              </div>
            </div>
            <div className={projectStyles.contentRow}>
              <h2>Implementation</h2>
              <p> With all these ideas and the input from potential users it was time to implement 
                our proof of concept. We sat down and talked about what framework would work best.
                We came to the decison that we would us a framework made by Meta called
                 Expo. Expo is worked perfectly for us because it 
                allows for your code to be viewed as an mobile app and a website without having
                to have two seperate codebases. We also liked that it offered fast refresh and 
                true native capabilities. Thank you for something Meta!

                <br/><br/>
                As for the main feature, we needed to implement the conversations that would
                take place with the bot. In order to do this we used the already existing technology.
                This was the Huggingface DialoGPT model which was pretrained on reddit data. This
                allowed us to have the computer carry out multiturn conversations with users. One
                of the downsides that we would like to work on in the future is to have a dataset
                that is more family friendly rather than reddit comments isn't necessarily ideal
                for a therapeutic setting. 

                   </p>
            </div>

            <div className={projectStyles.contentGallery}>

              <div className={projectStyles.gCont3}>
                <img src='/images/mbExpo.png'></img>
                <p>Meta's Expo Framework</p>
              </div>

              <div className={projectStyles.gCont3}>
                <img src='/images/mbdialogpt.png'></img>
                <p>Prototype 'Mindfulness'</p>
              </div>

            </div>

            <div className={projectStyles.contentRow}>
              <p> 
                Finally we needed a database that could record chatbot responses and also carry
                account credential and account details in one place. We decided to use a service
                called Firebase.
                <br/><br/>
                In the end we decided to feature 4 App navigation stacks. These stacks and the
                pages can be viewed in the diagram below.


                   </p>
            </div>

            <div className={projectStyles.contentGallery}>

              <div className={projectStyles.gCont}>
                  <img src='/images/mbdiagram2.png'></img>
                  <p>App Navigation</p>
              </div>

              <div className={projectStyles.gCont}>
                <img src='/images/mbdiagram1.png'></img>
                <p>Database communication</p>
              </div>

            </div>


          </div>

      </div>

      </>
    
  )
}

export default mindbot