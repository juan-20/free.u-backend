import React from 'react';
import { Link } from 'react-router-dom';


import logoImg from '../../assets/images/logo.png';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';


import './styles.css';
// import '../../../src/assets/styles/global.css';


function Landing(){
    return(
        <div id="page-landing" >
            <div id="page-landing-content" className="container">
            <div className="logo-container">
                <img src={logoImg} alt="Logo" />
                <h2>A revolução forma de trabalhar</h2>
                </div>   


                <img src={landingImg} 
                alt="Plataforma de estudos" className="hero-image"
                />


                <div className="buttons-container">
                    <Link to="/frells" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Contratar
                    </Link>

                    <Link to="/create-account" className="give-classes">
                        <img src={giveClassesIcon} alt="Estudar"/>
                        Trabalhar
                    </Link>
                </div>

                <span className="total-connections">
                    Juntos, aproximando pessoas
                    <img src={purpleHeartIcon} alt="Coração roxo"></img>
                </span>
            </div>
        </div>

    )
}

export default Landing