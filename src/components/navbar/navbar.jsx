import React, {useState} from 'react'
import './navbar.css';
import { RiMenu3Line, RiCloseLin, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';

const Menu = () => (
  <>
  <p><a href='#home'>Home</a></p>
  <p><a href='#wunity'>What is Unity?</a></p>
  <p><a href='#possibility'>Possibilities</a></p>
  <p><a href='#features'>Case Studies</a></p>
  <p><a href='#blog'>Library</a></p>
  </>
)

const NavBar = () => {

  const [toggleMenu, setToogleMenu] = useState(false);

  return (
    <div className='unity__navbar'>
      <div className='unity__navbar-links'>
        <div className='unity__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='unity__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='unity__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='unity__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToogleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToogleMenu(true)} />
        }
        {toggleMenu && (
          <div className='unity__navbar-menu_container scale-up-center'>
            <div className='unity__navbar-menu-container-links'>
              <Menu />
              <div className='unity__navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar