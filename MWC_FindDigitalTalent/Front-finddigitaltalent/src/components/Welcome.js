import { Link } from 'react-router-dom'
export const Welcome = () => {
  return (
    <div className = "animate__animated animate__pulse d-flex flex-column align-items-center justify-content-center gap-3">
    <img src="https://d1p9wirkq0k00v.cloudfront.net/wp-content/uploads/2016/02/15072804/mobileworldcapital.png" alt="Logo MObile World Capital"  width={800}/>
    <h1 className="text-center">Bienvenido al sistema de registro de Mobile World Capital en Barcelona</h1>
    <Link to="/Registro">
    <button className = "btn btn-danger p-3">¡Quiero participar!</button>
    </Link>
    </div>
    
    
  )
}


