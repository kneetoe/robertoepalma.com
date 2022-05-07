import React from 'react'
import Meta from '../../components/Meta'
import projectStyles from '../../styles/projectPage.module.scss'
const mindbot = () => {
  return (
    <>
    
    
    <div className={projectStyles.pageBody}>

      <Meta title='MindBot Application' project={true}/>
      
      
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

          <div className={projectStyles.contentContainer}>
            <div className={projectStyles.contentRow}>


            </div>

          </div>



        </div>

      </div>

      </>
    
  )
}

export default mindbot