
import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'

import { navLinks } from '../data'

const Nav = () => {
  return (
    <header className='padding-x py-8  z-11 w-full bg-cyan-100'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/"><img src={headerLogo} alt='Logo' width={125} height={30}/></a>
            <ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((item)=> (
                    <li key={item.label}><a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>{item.label}</a></li>
                ))}
            </ul>
        </nav>
    </header>
  )
}

export default Nav