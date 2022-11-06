import React, { useState } from 'react';
import './App.css';
import Imagem from './img/people.svg'

function App() {

  const [comentario, setComentario] = useState('');
  const [todosOsComentarios, setTodosOsComentarios] = useState([])
  
  // Salva o texto dentro da função "setComentario" que atribui o estado à variável "comentario"
  // Os valores estão dentro de comentario e são passados para "setTodosOsComentarios" para o evento do botão
  function typeTextarea(event){
    setComentario(event.target.value);
  }

  function clickButton(){
    const todosOsComentariosAnteriores = [...todosOsComentarios, comentario];
    setTodosOsComentarios(todosOsComentariosAnteriores)
  }

  return (
    <div className="App">
      <container>
      <img src={Imagem} alt='imagem-pessoas' />
      <textarea onChange={typeTextarea}></textarea>
      <button onClick={clickButton} type='text'>Comentar</button>
      <ul>
        {todosOsComentarios.map(coment => (
          <li key="coment">{coment}</li>
        ))}
      </ul>
      </container>

    </div>
  );
}

export default App;
