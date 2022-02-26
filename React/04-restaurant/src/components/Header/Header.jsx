import './Header.css';

import { Link } from "react-router-dom";
import logo from '../../assets/Logo.webp'

const Header = () => {
  return (
    <nav className = "navbar">
        <div className='logo'>
            <img src={logo} alt="Logotipo del restaurante" width={60}/>
            <span className='logo_text'>Bar Paquito</span>
        </div>
        <div className='menu'>
            <span>Menu</span>
        </div>
        <ul className = "list">
        <Link to="/"><li>Inicio</li></Link>
        <Link to="/reserva"><li>Reserva</li></Link>
        <Link to="/dondeestamos"><li>Donde estamos</li></Link>
        </ul>
    </nav>
  )
}

export default Header