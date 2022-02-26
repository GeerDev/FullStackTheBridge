import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                <img src="https://d1p9wirkq0k00v.cloudfront.net/wp-content/uploads/2016/02/15072804/mobileworldcapital.png" alt="Logo Mobile World Capital" width = { 180 } height = { 60 } />
            </Link>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                        to="/Inicio"
                    >
                        Inicio
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                        to="/Registro"
                    >
                        Registro
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                        to="/Participantes"
                    >
                        Participantes
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}