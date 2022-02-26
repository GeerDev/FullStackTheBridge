import './Header.css';

import { VscOctoface } from "react-icons/vsc";


const Header = () => {
  return (
    <nav className = "navbar">
        <div className='logo'>
            <span className='logo_icon'><VscOctoface /></span>
            <span className='logo_text'>Paquito Developer</span>
        </div>
        <div className='menu'>
            <span>Menu</span>
        </div>
        <ul className = "list">
            <li>Inicio</li>
            <li>Sobre mi</li>
            <li>Habilidades</li>
            <li>Contacto</li>
        </ul>
    </nav>
  )
}

export default Header