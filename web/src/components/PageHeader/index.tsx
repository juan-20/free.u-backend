import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg'
import logoImg from '../../assets/images/logo.png'

import './styles.css'

interface PageHeaderProps{
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) =>{
    return(
        <header className="page-header">
        <div className="top-bar-container">
            <Link to='/'>
                <img src={backIcon} alt="Voltar"></img>
            </Link>
            <img src={logoImg} alt="logo"></img>
        </div>
            <div className="header-content">
    <strong>{props.title}</strong>

     {/* pega o escito no tsx de origem e mescla com a interface */}
     {props.children}
            </div>
           
    </header>

    );
}

export default PageHeader;