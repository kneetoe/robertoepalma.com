import Link from 'next/link'
import navStyles from '../styles/Nav.module.scss'
import { useState } from 'react'
import Image from 'next/image'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openMenu = () => setIsOpen(!isOpen);
    const openMenuIfOpened = () => isOpen ? setIsOpen(false): setIsOpen(false);
  return (
    <nav className = {isOpen === false ? 
    navStyles.nav : navStyles.nav + " " + navStyles.active}>

        <div className={navStyles.externalNav}>
            <ul>
                <li>
                    <a href="https://github.com/kneetoe">
                        
                        <Image layout='responsive' width={40} height={40} src='/images/github.png'/>
                        </a>
                    
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/robertoepalma/">
                        <Image layout='responsive' width={40} height={40} src='/images/linkedin.png'/>
                    </a>
                </li>
            </ul>
        </div>
        

        <div className={navStyles.logo}>
            <Link href='/' ><p>Roberto<br/>Palma</p></Link>
        </div>

        <div className={isOpen === false ? 
            navStyles.webNav : navStyles.webNav + " " + navStyles.active}>
            <ul>
                <li>
                    <Link href='/#projects'><button onClick={openMenuIfOpened}>Projects</button></Link>
                </li>
                <li>
                    <Link href='/art'><button onClick={openMenuIfOpened}>Art</button></Link>
                </li>
                <li>
                    <Link href='/about'><button onClick={openMenuIfOpened}>About</button></Link>
                </li>
            </ul>
        </div>

       

        <button className={isOpen === false ? 
            navStyles.hamburger :  navStyles.hamburger + ' ' + navStyles.active}
            onClick={openMenu}>
            <span className={navStyles.bar}></span>
            <span className={navStyles.bar}></span>
            <span className={navStyles.bar}></span>
        </button>    

    </nav>
  )
}

export default Nav