import { getUsers } from '../services/getUsers'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useMemo } from 'react';
import { sendEmail } from '../services/sendEmail'

export const UserDetail = () => {

  const [currentUser, setcurrentUser] = useState({})
  const [error, setError] = useState([])

  const { Id } = useParams();
  const navigate = useNavigate()

  useMemo ( () => getUsers().then(user => {
    const result = user.find(u => u.id === Id)
    setcurrentUser(result)
  }), [Id])

  const handleReturn = () => {
    navigate( -1 );
  }

  const { name, image, email, country, cityOfResidence, sector, yearsOfExperience, skills } = currentUser

  const sendData = () => {
    const isAdmin = document.getElementById('isDigitalTalent').value
      const bodyEmail = {
        email: email,
        name: name,
        isDigitalTalent: isAdmin
      }
    sendEmail(bodyEmail).then(err => {
      setError([err.message])   
    })
    
  }

    return (
      <div className="row size">
      <div className="col-4">
          <img 
              src= {image}
              alt= {name}
              className="img-thumbnail animate__animated animate__fadeInLeft"
          />
      </div>

      <div className="col-8 animate__animated animate__fadeIn color p-3">
          <h3>{name}</h3>
          <ul className="list-group list-group-flush">
              <li className="list-group-item color2"> <b>Email:</b> {email} </li>
              <li className="list-group-item color2"> <b>Pais:</b> {country} </li>
              <li className="list-group-item color2"> <b>Ciudad de residencia:</b> {cityOfResidence} </li>
              <li className="list-group-item color2"> <b>Sector especializad@:</b> {sector} </li>
              <li className="list-group-item color2"> <b>Años de experiencia:</b> {yearsOfExperience} </li>
          </ul>

          <h5 className="mt-3">Habilidades</h5>
          {
            skills ? (
              <div className='d-flex align-items-start flex-wrap heightstandartdetail '>
              {skills.map((elem,idx) => (
              <div className='animate__animated animate__zoomIn '>
                <p className="tag-box" key={idx}>#{elem}</p>
              </div>
              ))}
            </div>
            ) : (
              <p>Obteniendo datos sobre las skills...</p>
            )
          }

          <div className='d-flex flex-column gap-3'>
          <span>Para poder enviar un correo necesitas la contraseña de administrador, por favor introducela:</span>
          <div className='d-flex gap-3 align-items-baseline'>
              <input type="text" id="isDigitalTalent" />
              <p className='animate__animated animate__flash'>{error}</p>
          </div>
          <div className='d-flex gap-3'>
          <button
              className="btn btn-outline-danger"
              onClick={ handleReturn }
          >
              Regresar 
          </button>
          <button
              className="btn btn-outline-danger"
              onClick={ sendData }
          >
              Contacta!
          </button>
          </div>
          </div>

      </div>

  </div>
    )
  }
  
