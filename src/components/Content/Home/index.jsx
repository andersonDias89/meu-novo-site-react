import React from 'react'
import * as C from './style'
import VetorHome from '../../../assets/img/Tag-Developer.png'

import Curriculo from '../../../assets/img/Documentos/Curriculum-Atualizado-Anderson-Dias.pdf'




export const Home = () => {
    return (
        <C.Home id="home">
            <C.Container>
                <C.Info>
                    <p className='hello'>Olá, eu me chamo</p>
                    <h1>Anderson <span>Dias</span></h1>
                    <p className='dev'>Desenvolvedor Front-end</p>

                    <div className="buttons">
                        <a href="#projetos" className='btn-project'>Projetos</a>
                        <a href={Curriculo} className='btn-cv' target="_blank">CV</a>
                    </div>
                </C.Info>

                <C.Image>
                    <img src={VetorHome} alt="Vetor de tags de programação" />
                </C.Image>
            </C.Container>
        </C.Home>
    )
}

