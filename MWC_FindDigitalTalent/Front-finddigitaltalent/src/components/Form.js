import { useNavigate } from 'react-router-dom'
export const Form = () => {

  const navigate = useNavigate()

    const onSubmit = (e) => {
      e.preventDefault()

      const form = {
        name: e.target.firstname.value,
        email: e.target.email.value,
        country: e.target.country.value,
        cityOfResidence: e.target.city.value,
        description: e.target.description.value
      }
      localStorage.setItem("myobject", JSON.stringify(form))
    }

    const navegate = () => {
      setTimeout( () =>{
        navigate('/Registro2')
      }, 0 )

    }

    return (
      <form onSubmit = { onSubmit } className="form animate__animated animate__fadeInLeft d-flex flex-column align-items-center justify-content-center mt-5" >

      <div className="title mt-2">Bienvenid@</div>
      <div className="subtitle text-center">Por favor rellena estos datos personales</div>

      <div className="input-container">
        <input className="input" type="text" placeholder="Nombre completo" name = "firstname" />
      </div>
      <div className="input-container">
        <input className="input" type="text" placeholder="Correo electrónico" name = "email"  />
      </div>
      <div className="input-container">
        <input className="input" type="text" placeholder="Pais" name = "country"  />
      </div>
      <div className="input-container">
        <input className="input" type="text" placeholder="Ciudad de residencia" name = "city"  />
      </div>
      <div className="input-description">
        <textarea  className="input" type="text" placeholder="Una breve descripción..." name = "description" />
      </div>
       
          <button type="submit" className="submit mb-2" onClick={ navegate }>Ya solo falta el último paso</button>
      
    </form>
    )
  }
  
  