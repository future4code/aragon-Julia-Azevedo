
import React from 'react';

function Etapa1(){
   return(
    <div>
        <form>
            <h1>ETAPA 1 - DADOS GERAIS</h1>
            <h2>1. Digite o seu nome</h2>
            <input type="text" id="nome"/>

            <h2>2. Digite a sua idade</h2>
            <input type="text" id="idade"/>

            <h2>3. Digite o seu E-mail</h2>
            <input type="text" id="email"/>

            <h2>4. Selecione a sua escolaridade:</h2>
            <select>
                <option>Ensino Fundamental Incompleto</option>
                <option>Ensino Fundamental completo</option>
                <option>Ensino Médio Incompleto</option>
                <option>Ensino Médio completo</option>
                <option>Gradução Incompleta</option>
                <option>Graduação completa</option>
                <option>Pós-graduação incompleta</option>
                <option>Pós-graduação completa</option>
                <option>Mestrado incompleto</option>
                <option>Mestrado completo</option>
                <option>Doutorado incompleto</option>
                <option>Doutorado completo</option>
            </select>
        </form>
    </div>
   )
}

export default Etapa1