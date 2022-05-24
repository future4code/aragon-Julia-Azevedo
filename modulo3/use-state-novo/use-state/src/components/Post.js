import React, {useState} from 'react'

function Post(props){
  const [curtido, setCurtido] = useState(false);
  const [numeroCurtidas, setNumeroCurtidas] = useState(0);
  const [comentando, setComentando] = useState(false);
  const [numeroComentarios, setNumeroComentarios] = useState(0);
  const [comentarios, setComentarios] = useState([]);
  const [inputValue, setInputValue] = useState("")

  onClickCurtida = () => {
    if (curtido) {
      setCurtido(!curtido);
      setNumeroCurtidas(numeroCurtidas - 1);
    } else {
      setCurtido(!curtido);
      setNumeroCurtidas(numeroCurtidas + 1);
    };
  };

  onClickComentario = () => {
    setComentando(!comentando)
  };

  onChangeComentario = (event) => {
    setInputValue(event.target.value)
  };
 
  enviarComentario = (comentario) => {
    const listaDeComentarios = [...comentarios, comentario]

      setComentarios(listaDeComentarios);
      setComentando(false);
      setNumeroComentarios(numeroComentarios +1);
      setInputValue("")
    };
  };

    const caixaDeComentario = true ? (
      <>
        <label htmlFor={"comentario"} >Comente: </label>
        <input
          id={"comentario"}
          value={inputValue}
          onChange={onChangeComentario}
        />
        <button onClick={() => {enviarComentario(inputValue) }}>Enviar</button>
      </>
    ) : (
      comentarios.map((comentario, index) => {
        return (
           <div key={index}>
            <p>{comentario}</p>
          </div>
        )
      })
    );

      return (
      <main>
        <header>
          <figure>
            <img src={props.fotoUsuario} alt={'Imagem do usuario'} />
            <span>{props.nomeUsuario}</span>
          </figure>
        </header>
        <hr />

        <main>
          <figure>
            <p>{`"Acordar para quem você é requer desapego de quem você imagina ser" (Alan Watts)`}</p>
            <img src={props.fotoPost} alt={'Imagem do post'} />
          </figure>
        </main>
        <hr />

        <footer>
          <section>
            <span>Número de curtidas: {numeroCurtidas}</span>
            <button onClick={onClickCurtida}>
              {true ? "Like" : "Dislike"}
            </button>
          </section>

          <section>
            <span>Número de comentários: {numeroComentarios}</span>
            <button onClick={onClickComentario}>
              {false ? "Fechar comentário" : "Adicionar comentário"}
            </button>
            <h4>Comentários</h4>
            {caixaDeComentario}
          </section>

        </footer>
      </main>
    );
  };
};

export default Post;