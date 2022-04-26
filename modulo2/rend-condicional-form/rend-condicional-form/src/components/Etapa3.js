import styled from 'styled-components';
import React from 'react';

function Etapa3(){
   return(
    <div>
        <form>
            <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
            <h2>7. Por que você não terminou um curso de graduação?</h2>
            <input type="text" id="motivo"/>

            <h2>8. Você fez algum curso complementar? Se sim, qual?</h2>
            <input type="text" id="cursocomplementar"/>
        </form>
    </div>
   )
}

export default Etapa3