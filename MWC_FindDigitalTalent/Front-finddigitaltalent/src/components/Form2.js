import { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { postUser } from '../services/postUser'

export const Form2 = () => {

  const [array, setArray] = useState([])

  const navigate = useNavigate()

  const form = JSON.parse(localStorage.getItem('myobject'));

    const addArray= () => {
      const ref = document.getElementById('skills')
      setArray([...array, ref.value])
      ref.value = ''
    }

    const onSubmit = (e) => {
      e.preventDefault()
      const form2 = {
        sector: e.target.sectors.value,
        yearsOfExperience: e.target.years.value
      }

      const sendUser = {...form, ...form2, skills: array}
      postUser(sendUser)

    }

    const navegate2 = () => {
      setTimeout( () =>{
        navigate('/Participantes')
      }, 1000 )

    }

    return (
      <form onSubmit = { onSubmit } className="form animate__animated animate__fadeInRight d-flex flex-column align-items-center justify-content-center">
      <div className="subtitle text-center">Los últimos detalles sobre tu experiencia en el sector</div>
      <div className="input-container">
      <select name="sectors" className="input-select" defaultValue={'DEFAULT'}>
      <option value="DEFAULT" disabled>Selecciona sector</option>
            <option value="Front Developer">Front Developer</option>
            <option value="Back Developer">Back Developer</option>
            <option value="Data Sciencie Developer">Data Sciencie Developer</option>
            <option value="Mobile Developer">Mobile Developer</option>
      </select>
      </div>
      <div className="input-container">
        <input className="input" type="number" placeholder="Años de experiencia" name="years" />
      </div>
      <div className="input-hability d-flex gap-2">
        <input id="skills" className="input" type="text" placeholder="Habilidades" />
        <button type ="button" className = "btn btn-danger" onClick={ addArray }>Añadir</button>
      </div>
      
      <div className='d-flex align-items-start flex-wrap heightstandart '>
      {array.map((elem,idx) => (
      <div className='animate__animated animate__zoomIn '>
        <p className="tag-box" key={idx}>#{elem}</p>
      </div>
      ))}
      </div>
  
      <button type="submit" className="submit2 mb-2" onClick={ navegate2 }>Enviar</button>

    </form>
    )
  }
  