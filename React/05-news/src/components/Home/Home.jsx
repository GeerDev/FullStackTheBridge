import './Home.css';

import { Link } from "react-router-dom";

import logo from '../../assets/Logo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBurger } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    return (
      <div className="home animate__animated animate__fadeIn">
         <img src={logo} alt="Logo Food News"/>
         <h1>Welcome to <span className='typewriter'>Food News</span></h1>
         <p>The best page to create and see news about food</p>
         <Link to="/form">
         <button> <FontAwesomeIcon icon={faBurger} /> Create a new news</button>
         </Link>
      </div>
    )
  }
  
  export default Home