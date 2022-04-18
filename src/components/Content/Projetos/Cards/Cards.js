import * as C from './style'

import { Card } from './Card/Card'

import ThumbRachi from '../../../../assets/img/thumbProjects/Projeto-Rachi.PNG'
import ThumbAcademia from '../../../../assets/img/thumbProjects/Thumb-Site-Academia.PNG'
import ThumbDevCurso from '../../../../assets/img/thumbProjects/Thumb-Landing-Page-Cursos.PNG'


export const Cards = () => {
    return (
        <C.Cards>

            <Card
                img={ThumbRachi}
                alt='Capa do projeto Rachi'
                title='Projeto Rachi'
                info='Desafio proposto por Iuri Silva para desenvolver 
                um web site da empresa Rachi'
                live='https://projeto-rachi.web.app'
                repo='https://github.com/andersonDias89/rachi-desafio'
            />

            <Card
                img={ThumbAcademia}
                alt='Capa do projeto do site da academia'
                title='Site Academia'
                info='Projeto criado para portfólio.Trata-se de um 
                site para academia divulgando os seus serviços'
                live='https://academia-projeto.web.app'
                repo='https://github.com/andersonDias89/academia-treino'
            />

            <Card
                img={ThumbDevCurso}
                alt='Capa da landing page curso para dev'
                title='Landing Page Curso'
                info='Projeto realizado para o meu portfólio. 
                Trata-se de uma landing page de divulgação para cursos de programação.'
                live='https://curso-dev-projeto.web.app'
                repo='https://github.com/andersonDias89/Landing-Page-Dev'
            />


        </C.Cards>
    )
}