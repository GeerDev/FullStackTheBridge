import comida from '../../assets/Comida.png'

import './Home.css';

const Home = ({ name, price, pricing }) => {
  return (
  <main className="card">
    <header>
      <img src={comida} alt="¿Comida? ¿Donde?" width={250}/>
    </header>

    <section>
      <h2>{ name }</h2>
      <h3>Aquí ira el tipo de comida</h3>
      <p>Esto es una descripción bastante larga pero no demasido sobre lo que contiene la comida que te vas a pedir para comer o cenar o quizas merendar</p>
      <span>Su precio: <strong>{ price } { pricing[0].currency }</strong></span>
      <p>Estos son los tipos de alimento que lleva, por si eres alérgic@ a algo:</p>
      <ul>
        <li><i>#Cuidado1</i></li>
        <li><i>#Cuidado2</i></li>
        <li><i>#Cuidado3</i></li>
        <li><i>#Cuidado4</i></li>
      </ul>
    </section>
  </main>
  )
}

export default Home