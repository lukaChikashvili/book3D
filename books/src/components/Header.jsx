import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
     <header className='w-full flex items-center justify-between absolute top-0 left-0 z-10 px-12 py-6 text-xl'>
        <div>
            <Link to = "/" className='cursor-pointer'>logo</Link>
        </div>

        <nav className='flex items-center'>
        <ul className="flex items-center gap-6">
          <li><Link to="/books">Books</Link></li>
          <li><Link to="/genres">Genres</Link></li>
          <li><Link to="/authors">Authors</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
    
        </nav>
     </header>
  )
}

export default Header
