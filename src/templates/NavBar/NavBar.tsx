import { NavBarProps } from './NavBar.types'
import './NavBar.css'

function NavBar({ items }: NavBarProps) {
  return (
    <header className='navbar'>
      <div className='nav-container'>
        <div className='nav-title'>David Sawatzky</div>
        <nav className='nav-items'>
          {items?.map((item) => (
            <a key={item.name} href={item.link} className='nav-item'>
              {item.name}
            </a>
          ))}
        </nav>
      </div>
      <div className='nav-container'>
        <a href='#contact' className='nav-item contact-item'>
          Hire Me
        </a>
      </div>
    </header>
  )
}

export default NavBar
