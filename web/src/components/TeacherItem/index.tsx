import React from 'react';
import TeacherList from '../../pages/UserList';

// imagem
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import nauj from '../../assets/images/nauj.jpeg'

import './styles.css'

function TeacherItem(){
    return(
    <article className="teacher-item">
                   <header>
                       <img src="https://avatars0.githubusercontent.com/u/49418565?s=460&u=caa6add820c3e5842ba889673008612e15261857&v=4" alt="Juan Andrade"/>
                        <div className="">
                            <strong>
                                Juan

                                 <span>Html </span>
                                </strong>
                        </div>
                   </header>
                        <p>Designer grafico
                            <br/> <br/>
                           texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto 
                        </p>

                        <footer>
                            <p>Preço por Hora
                                <strong>R$ 2,50</strong>
                            </p>
                            <button type="button">
                                <img src={whatsappIcon} alt="whatsapp"/>
                                <p> Entrar em contado </p>
                            </button>
                        </footer>
               </article>
    );
}

export default TeacherItem;