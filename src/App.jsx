import React from 'react';

import './App.css';

import Primeiro from './components/Primeiro';
import ComParamentro from './components/ComParamentro';
import ComFilhos from './components/ComFilhos';
import Card from './components/layout/Card';
import Repeticao from './components/Repeticao';
import Condicional from './components/Condicional';
import CondicionalComIf from './components/CondicionalComIf';

export default(props) => (
<div className="App">
    <Card titulo="#01 - Primeiro Componente">
        <Primeiro />
    </Card>
    
    <Card titulo="#02 - Componente com parametro">
        <ComParamentro titulo="Esse é um titulo"
            subtitulo="Esse é o subtitulo" /> 
    </Card>

    <Card titulo="#03 - Componente com filhos">
        <ComFilhos>
            <ul>
                <li>Ana</li>
                <li>Bia</li>
                <li>Leo</li>
                <li>Teo</li>
            </ul>
        </ComFilhos>
    </Card>

    <Card titulo="#04 - Componente de repetição">
        <Repeticao></Repeticao>
    </Card>
    
    <Card titulo="#05 - Condicional v1">
        <Condicional numero={1}></Condicional>
    </Card>

    <Card titulo="#06 - Condicional v2">
        <CondicionalComIf numero={2}></CondicionalComIf>
    </Card>
</div>
);