import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router';

import profile from '../../assets/images/icons/user.svg';
import api from '../../services/api';
// import FiPaperclip from 'react-icons';


import Input from "../Input/";
import Textarea from "../Textarea/";

import './styles.css';

export default function TeacherForm() {




  

  const history = useHistory();

  const [nome, setNome] = useState("");
  const [bio, setBio] = useState("");
  const [address, setAddress] = useState("");
  const [school, setSchool] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [images, setImages] = useState<File[]>([]);


  const [previewImages, setPreviewImages] = useState<string[]>([]);


  async function handleSubmit(event: FormEvent) {
    debugger
    event.preventDefault();
   

    const data = new FormData();

    data.append("nome", nome);
    data.append("bio", bio);
    data.append("addres", String(address));
    data.append("school", String(school));
    data.append("email", email);
    data.append("password", password);

    images.forEach((image) => {
      data.append("images", image);
    });

    await api.post("infos", data);

    alert("Cadastro com Sucesso!");

    history.push("/app");
  }





    return(
        <article className="teacher-item">
        <header>
            {/* <input type="file" id="myfile" name="myfile"> */}
           
            {/* </input> */}
            {/* <p contentEditable="true">Insira seu nome</p> */}
        </header>
        <form onSubmit={handleSubmit} >
          <main>
          
              <fieldset>
             
              <legend>Seus Dados</legend>

              <div className="images-container">
                {previewImages.map((image) => {
                  return <img key={image} src={image} />;
                })}
                <label htmlFor="image[]" className="new-image">
                  <a color="#15b6d6" />
                  {/* <FiPaperclip size={24} color="#15b6d6" /> */}
                </label>
              </div>
              <input
                multiple
                type="file"
                id="image[]"
              />
          <Input
             value={nome}
             onChange={(event) => setNome(event.target.value)}
          id="nome"   name="name" label="Nome Completo" />
          <Textarea
             value={bio}
             onChange={(event) => setBio(event.target.value)}
          id="bio" name="bio" label="Biografia" />
          <Input
           value={address}
           onChange={(event) => setAddress(event.target.value)}
          id="adress" name="adress" label="Cidade" />
          <Input
            value={school}
            onChange={(event) => setSchool(event.target.value)}
          id="scool"  name="scool" label="Escolaridade" />
          <Input
             value={email}
             onChange={(event) => setEmail(event.target.value)}
          id="email"  name="email" label="Email" />
          <Input
             value={password}
             onChange={(event) => setPassword(event.target.value)}
          id="password"  name="password" label="Senha" />
          </fieldset>

          <footer>
          <p>
            <img alt="Aviso Importante" />
            Importante <br />
            Preencha todos os dados
          </p>
          <button type="submit" >Salvar cadastro</button>
        </footer>

      </main>
      </form>
    </article>
    
    );

function cad(){
    const usuarios = [];
    // console.log("Bom dia");
  
    const nome =     (document.getElementById("nome") as HTMLInputElement).value;
    const email =     (document.getElementById("email") as HTMLInputElement).value;
    const zap =     (document.getElementById("zap") as HTMLInputElement).value;
    const bio =     (document.getElementById("bio") as HTMLInputElement).value;

    let id = usuarios.length;

    console.log(setNome);

    const usuario = {id: id++,nome, email, zap, bio};

    

    // let usuariogravado = JSON.parse( window.localStorage.getItem('usuarios'));
  
    // usuariogravado.push(usuario);
  
    // window.localStorage.setItem("usuarios", JSON.stringify(usuariogravado));
}
}

 