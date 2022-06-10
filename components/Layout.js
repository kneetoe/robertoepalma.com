import styles from '../styles/Layout.module.css'
import Meta from './Meta'
import Nav from './Nav'
import Script from 'next/dist/client/script'

const Layout = ({ children } ) => {
    return (
      <>
       

      <Meta />
          <Nav />
          <div className={styles.container}>
              <main className={styles.main}>
                  {children}
              </main>
          </div>
      </>
    )
  }
  
  export default Layout
