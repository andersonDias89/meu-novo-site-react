import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

import * as C from './style'

export const Menu = () => {
    const [visibility, setVisibility] = useState(false)

    return (
        <C.Menu>
            <C.Container>
                <C.Name>
                    <p><span>Anderson</span> Dias</p>
                </C.Name>

                <C.NavBar>

                    <ul>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#sobre">Sobre</a>
                        </li>
                        <li>
                            <a href="#projetos">Projetos</a>
                        </li>
                        <li>
                            <a href="#contato">Contato</a>
                        </li>
                    </ul>

                </C.NavBar>


                <C.Toggle>
                    {!visibility === true &&
                         <a onClick={() => setVisibility(true)}>
                            <GiHamburgerMenu/>
                         </a>

                        // <button onClick={() => setVisibility(true)}>Menu</button>
                    }

                    {visibility === true &&
                        <ul>
                            <div className="btn-close">
                                <a onClick={() => setVisibility(false)}>X</a>
                            </div>
                            <div className="links">
                                <li>
                                    <a href="#home" onClick={() => setVisibility(false)}>Home</a>
                                </li>
                                <li>
                                    <a href="#sobre" onClick={() => setVisibility(false)}>Sobre</a>
                                </li>
                                <li>
                                    <a href="#projetos"  onClick={() => setVisibility(false)}>Projetos</a>
                                </li>
                                <li>
                                    <a href="#contato"  onClick={() => setVisibility(false)}>Contato</a>
                                </li>
                            </div>
                        </ul>
                    }


                </C.Toggle>
            </C.Container>
        </C.Menu>
    )
}