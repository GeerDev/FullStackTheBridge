import { Link } from 'react-router-dom'

export const UserList = ({ id, name, description, image}) => {
    return (
      <div className="card animate__animated animate__jackInTheBox">
      <img src={ image } alt="Logo MObile World Capital" width={250}/>
      <div className="card-body">
        <h5 className="card-title">{ name }</h5>
        <p className="card-text">{ description }</p>
        <Link to={`/Participante/${id}`}>
        <button className="btn btn-danger">Ir al perfil de { name }</button>
        </Link>
      </div>
    </div>  
    )
  }
  
  