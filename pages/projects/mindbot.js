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
                but as our research showed, it was especially difficult for individuals  
                living with autism. <br/><br/>Working under the NEAT LAB at Western Washington
                University,
                Ethan Karlinsey, Prab Deol, Kohl Nguyen, and I worked as a team 
                 to provide a way to address this increase in stress and anxiety
                 sincerely and sustainably. Research done by Ashima Shrivastava paved
                   the way toward this solution. Ashima, Gabriel Lam, and I
                   researched throughout the process to assist in our implementation.
                    </p>
            </div>

            <div className={projectStyles.contentGallery}>

              <div className={projectStyles.gCont}>
                  <img src='/images/mindbotGraph.png'></img>
                  <p>Participants in the study</p>
              </div>

              <div className={projectStyles.gCont}>
                <img src='/images/mindbotAtlas.png'></img>
                <p>Program for qualitative research or qualitative data analysis</p>
              </div>

            </div>

            <div className={projectStyles.contentRow}>
              <h2>The Research</h2>
              <p>The research during the implementation involved interviewing 15 participants.
                 Before any interviews, we read and took notes on several research papers to 
                 design a prototype design. The interview process involved adjusting to each 
                 participant but followed a checklist. This list involved asking about the 
                 stress in their daily lives, how the pandemic affected them, what they did to
                  cope, and their thoughts on the prototype. After conducting the interviews,
                   it was essential to code and interpret the dialogues. To code, we needed to
                    listen to the recorded interviews, highlight different conversations, and 
                    take notes on parts of the conversations that were points of interest. The
                     program, AtlasTI, streamlines this process. Our findings are in a drafted 
                     research paper.

                  <br></br><br></br> The research Ashima had done before the rest of us joined
                   the project provided us with three main pages used to make the prototype design. 
                   </p>
            </div>

            <div className={projectStyles.contentPhotos}>
                <div className={projectStyles.pCont}>
                  <img src='/images/mbIcon1.png'></img>
                  <h3>Mindfulness Page</h3>
                  <p>Breathe in, now breathe out. This page allows users to practice
                     mindfulness. The idea was to offer guided practices with videos
                      or podcasts that allowed users to work on their mental health each day.
                  </p>
                </div>
                <div className={projectStyles.pCont}>
                  <img src='/images/mbIcon2.png'></img>
                  <h3>ChatBot Page</h3>
                  <p>How was your day? By utilizing the existing technologies, we can offer
                     users mental relief. Most people find it very helpful to have someone
                      to talk to about their day and how they are feeling. Having an AI Chatbot
                       could help users destress without worrying about privacy.
                    </p>
                </div>
                <div className={projectStyles.pCont}>
                  <img src='/images/mbIcon3.png'></img>
                  <h3>Instant Page</h3>
                  <p>Sometimes there are emergencies where potential users would need immediate
                     help. For example, when they find themselves in a very stressful time.
                      There was a lot of discussion about what would best be a fit for this
                       goal. For this reason, we asked participants what they would prefer
                        to see here.
                  </p>
                </div>

            </div>

            <div className={projectStyles.contentRow}>
              <p>  While doing these interviews before and during development, we introduced
                 some of the features that we saw as most beneficial: The requested features
                  include:
                   
                   </p>

              <ul>
              <li><b>Personalization:</b> Users would be able to customize their experience.
                </li>
                <li><b>Conveying emotion:</b> Sending emotions with messages to better understand 
                the context between the chatbot.
                </li>
                <li>
                <b>Natural Conversation:</b> A human-like conversation with a chatbot that would 
                mimic having a text conversation with a friend.
                </li>
                <li>
                <b>Nature-like:</b> Lastly, a natural feel and relaxed aesthetic to the app.
                </li>
              </ul>

              <p>We used these findings to help us develop an app that matched the wants of
                 potential users. </p>
            </div>

            <div className={projectStyles.contentGallery}>

              <div className={projectStyles.gCont3}>
                <img src='/images/mbp1.png'></img>
                <p>Prototype &apos;Main menu&apos;</p>
              </div>

              <div className={projectStyles.gCont3}>
                <img src='/images/mbp2.png'></img>
                <p>Prototype &apos;Mindfulness&apos;</p>
              </div>

              <div className={projectStyles.gCont3}>
                <img src='/images/mbp3.png'></img>
                <p>Prototype &apos;Chat with bot&apos;</p>
                
              </div>
            </div>
            <div className={projectStyles.contentRow}>
              <h2>Implementation</h2>
              <p> With all these ideas and the input from potential users, it was time to
                 implement our proof of concept. We sat down and talked about what framework
                  would work best. We decided that we would use a framework made by Meta called
                   Expo. Expo worked perfectly for us because it allows the same code to
                    compile into a mobile app and a website without having two separate
                     codebases. We also liked that it offered fast refresh and true native
                      capabilities. 

                <br/><br/>
                As for the main feature, we needed to implement the conversations that would
                 take place with the bot. To do this, we used the already existing technology.
                  This technology was the Huggingface DialoGPT model. This model was
                   pre-trained on Reddit data. With this model, the app could carry out
                    multiturn conversations with users. However, there was a downside to 
                    using the model. We needed a dataset that offers more family-friendly
                     responses than learning from Reddit comments. It is not necessarily
                      ideal for a therapeutic setting. Updates to this application involve
                       searching for a data set that is more like how a professional 
                       therapist would speak with their patients.

                   </p>
            </div>

            <div className={projectStyles.contentGallery}>

              <div className={projectStyles.gCont3}>
                <img src='/images/mbExpo.png'></img>
                <p>Meta&#39;s Expo Framework</p>
              </div>

              <div className={projectStyles.gCont3}>
                <img src='/images/mbdialogpt.png'></img>
                <p>Hugging face</p>
              </div>

            </div>

            <div className={projectStyles.contentRow}>
              <p> 
              Finally, we needed a database to record chatbot responses, carry account 
              credentials, and account details. We decided to use a service called Firebase. 
              Firebase is used to create mobile and web applications, but we use it to manage 
              our data.
                <br/><br/>
                In the end, we decided to feature four App navigation stacks. The log-in, 
                registration, and welcome screen are all a part of the Auth Stack. There are 
                the settings, mindfulness, and chatbot Stacks, each with their respective 
                screens.


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