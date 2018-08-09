import React from 'react';
import Nav from '../Nav/Nav.js';
import './About.scss';
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <div className="wrapper-about-page">
    <Nav />
      <div className="wrapper-about">
        <div className="about-and-img">
          <div className="about">About</div>
          <Link to='/profil' className="profil-img">
            <img src="https://kultivisise.rs/wp-content/uploads/2017/05/dusko-dugousko.jpg"/>
          </Link>
        </div>
        <div className="about-text">
          <p>Le marxisme est un courant de pensée politique, sociologique et économique fondé sur les idées de Karl Marx (et dans une moindre mesure de Friedrich Engels) et de ses continuateurs. Politiquement, le marxisme repose sur la participation au mouvement réel de la lutte des classes, afin d'arriver à une société sans classes en tant qu'alternative au capitalisme. 
            En effet, Karl Marx considère que « l’émancipation des travailleurs doit être l’œuvre des travailleurs eux-mêmes »</p>
        </div>
      <div className="go-back">Go back</div>
      </div>
    </div>
  )
}

export default About;
