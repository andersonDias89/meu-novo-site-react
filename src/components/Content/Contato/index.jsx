import React from 'react' 
import * as C from './style'
import VetorContato from '../../../assets/img/Vetor-Contato.png'

import {BsGithub} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

export const Contato = () => {
    return (
        <C.Contato id="contato">
            <C.Container>
                <C.Image>
                    <img src={VetorContato} alt="Imagem ilustrativa de contato" />
                </C.Image>

                <C.Info>

                    <div className="container">
                        <h2>Contato</h2>
                        <div className="data">
                            <div className="phone">
                                <p>84 99637-4284</p>
                            </div>
                            <div className="email">
                                
                                <p>andersondiasmd21@gmail.com</p>
                            </div>
                        </div>
                        <div className="icos-redes">

                            <a href="https://github.com/andersonDias89" target={'_blanck'}><BsGithub /></a>
                            <a href="https://www.linkedin.com/in/anderson-dias-bb7b3122b/" target={'_blanck'}><AiFillLinkedin /></a>
                            <a href="https://www.instagram.com/andersondias_dev/" target={'_blanck'}><AiFillInstagram /></a>

                        </div>
                    </div>
                    
                </C.Info>
            </C.Container>
        </C.Contato>
    )
}