import React, { FormEvent, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Form from '../../components/Form';

import Github from '../../assets/images/icons/github.svg'
import Linkedin from '../../assets/images/icons/linkedin.svg'
import Google from '../../assets/images/icons/google.svg'


import './styles.css'
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

function TeacherForm(){




  // name
  // bio
  // adress
  // school
  // e-mail
  // password
  // profile_pic





    return(
      <div id="page-teacher-list"
      className="container">
         <PageHeader title="Faça sua conta:">
         

         
         <form id="search-teachers">
               <div className="input-block">
               <button type="button" id="subject">
               <img src={Github} 
                alt="Plataforma de estudos" className="hero-image"
                />
               </button>
               </div>  

               <div className="input-block">
               <button type="button" id="week_day">
               <img src={Linkedin} 
                alt="Plataforma de estudos" className="hero-image"
                />
               </button>
               </div>  

               
               <div className="input-block">
               <button type="button" id="week_day">
               <img src={Google} 
                alt="Plataforma de estudos" className="hero-image"
                />
               </button>
               </div>  
              </form>  
              </PageHeader>

          <main>

              <Form></Form>
         </main>
         

         




      </div>

     

    );
}

export default TeacherForm;