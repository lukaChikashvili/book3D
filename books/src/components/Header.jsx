import gsap from 'gsap'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {


    
     
    
  return (
     <header className='w-full flex items-center justify-between absolute top-0 left-0 z-10 px-12 py-6 text-xl'>
        <div>
            <Link to = "/" className='cursor-pointer text-reveal'>Biblus</Link>
        </div>

        <nav className='hidden md:flex items-center '>
        <ul className="flex items-center gap-6">
          <li><Link to="/books" data-replace = "Books"><span>Books</span></Link></li>
          <li><Link to="/genres" data-replace = "Genres"><span>Genres</span></Link></li>
          <li><Link to="/authors" data-replace = "Authors"><span>Authors</span></Link></li>
          <li><Link to="/about" data-replace = "About"><span>About</span></Link></li>
          <li><Link to="/contact" data-replace = "Contact"><span>Contact</span></Link></li>
        </ul>
    
        </nav>

       

     </header>
  )
}

export default Header
