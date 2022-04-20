import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/storage-api.rh.live.convenia.com.br/loggi-tecnologia-ltda/employee-avatar/JGCfjE3EWG8Dias8kJrGl2cKqEE7PpMJTCXMzXn9.png" 
          nome="Julia" 
          descricao="Olá, eu sou a Julia. Sou estudante de Desenvolvimento Web Full Stack na Labenu."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/2026/2026596.png" 
          texto="Ver mais"
        />

        <CardPequeno
          texto="E-mail: julia@loggi.com"
        />

        <CardPequeno
          texto="Endereço: Rua Labenu"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://scontent.fsdu13-1.fna.fbcdn.net/v/t31.18172-8/12764821_1286764998006172_5878647273183796514_o.png?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=dfuGH9FO0dQAX8iESxS&_nc_ht=scontent.fsdu13-1.fna&oh=00_AT_aBMwWEYXGvAuWa9N4m3J6HorPon6CJu6XfR6MOATXEw&oe=62832773" 
          nome="Loggi" 
          descricao="Desenvolvedora iniciante" 
        />
        
        <CardGrande 
          imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Mackenzie_M.svg/800px-Mackenzie_M.svg.png" 
          nome="Universidade Presbiteriana Mackenzie" 
          descricao="Estágio em saúde pública" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
