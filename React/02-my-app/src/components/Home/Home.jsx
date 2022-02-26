import './Home.css';

import Image from './Image/Image'

const Home = () => {
  return (
    <div className = "home">
        <div className='home_left'>
          <img src="https://images.pexels.com/photos/5749818/pexels-photo-5749818.jpeg" alt="Hombre que parece que esta trabajando" />
        </div>
        <div className='home_right'>
          <h1>Quien soy</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non illo ullam, unde eligendi culpa facilis delectus sit, dolor facere qui consequuntur dicta autem, tempora officia mollitia dolores voluptas optio debitis!</p>
          <h3>Datos personales</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci non natus blanditiis distinctio laudantium culpa numquam dolor nihil voluptas officia maiores, nostrum minus corporis neque reiciendis, cum praesentium, dicta sed.</p>
          <Image />
          <button className='button'>Contacta conmigo</button>
        </div>
    </div>
    
  )
}

export default Home