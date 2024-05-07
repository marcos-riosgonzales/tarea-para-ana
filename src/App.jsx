import React from 'react'
import './App.css'
import imagen1 from "./assets/img/Lionel-Messi.jpg"
import Testimonio from './assets/Testimonio'
import estilos from "./assets/scss/TestimonioDesign.module.scss"
import imagen2 from "./assets/img/Cristiano Ronaldo.jpg"
import imagen3 from "./assets/img/Sergio Ramos.jpg"

function App() {
  const arreglo = [{
    id: 1,
    nombres: 'Lionel Messi',
    pais: ' argentina',
    imagen: imagen1,
    cargo: 'futbolista, juega en las posicione de delantero o centrocampista',
    equipos: 'jugado en los equipos: del barcelona, PSG, y actualmente en el Inter miami',
    testimonio: 'es un jugador excepcional y no saben sus enemigos cuando hara magia en el campo.'
  },
  {
    id: 2,
    nombres: 'Cristiano Ronaldo',
    pais: 'Portugal',
    imagen: imagen2,
    cargo: 'futbolista, juega en las posicion delantero extremo izquierdo',
    equipos: 'jugadndo en los equipos de porting, Manchester United, Real Madrid, Juventus y Al-Nassr',
    testimonio: 'es un jugador eque siempre quiere mejorar y que a cautibado a sus fans por lo ien que juega.'
  },
  {
    id: 3,
    nombres: 'Sergio Ramos',
    pais: 'España',
    imagen: imagen3,
    cargo: 'futbolista, juega en las posicion de  defensa central y lateral derecho, e incluso ha jugado como centrocampista aunque es como central cuando ofrece su mejor rendimiento',
    equipos: 'Raa jugado en los equipos de Chelsea Football Club, Associazione Sportiva Roma, Società Sportiva Lazio, y actualmente en Sevilla Fútbol Club por mensionar algunos',
    testimonio: 'Un defensa excepcional, sin miedo a hacer faltas ni lecionarse, esta dispuesto a seguir siempre de frente.'
  }
];

    return(
      <>
        <div className={estilos.title}>
          <h1 >Testimonios de fans</h1>
          {arreglo.map((props) =>(
            <Testimonio
              key={props.id}
              nombre={props.nombres}
              pais={props.pais}
              imagen={props.imagen}
              cargo={props.cargo}
              equipos={props.equipos}
              testimonio={props.testimonio}
            />
          ))}
        </div>
      </>
    )
  
}

export default App
