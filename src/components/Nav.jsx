
import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'

import { navLinks } from '../data'

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-50 w-full'>
        <nav className='flex justify-between items-center max-container'>
            
            <a href="/"><img src={headerLogo} alt='Logo' width={125} height={30}/></a>
            
            <ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((item)=> (
                    <li key={item.label}><a href={item.href} className='font-montserrat leading-normal text-xl text-slate-800 font-bold hover:text-coral-red transition-all'>{item.label}</a></li>
                ))}
            </ul>
            
            <div className='hidden max-lg:block'>
                <img src={hamburger} alt='MenuIcan' width={25} height={25}/>
            </div>
        </nav>
    </header>
  )
}

export default Nav