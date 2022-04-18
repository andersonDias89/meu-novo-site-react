import styled from 'styled-components'
import React, { useState } from 'react'

import { IoLogoCss3 } from 'react-icons/io'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import {BsArrowUpCircle} from 'react-icons/bs'

export const Style = styled.div`
width: 90%;
display: flex ;
flex-direction: column;
justify-content: center ;
align-items: center ;

@media screen and (max-width: 600px) {
    width: 100%;
}

.box{
    background-color: var(--cor-primaria) ;
    width: 100%;
    position: relative;
    border-radius: 10px 10px 0 0;
    padding: 10px;
    margin-bottom: 5px ;
    
    .info{
        display: flex;
        
        align-items: center ;
        .icon{
            display:flex ;
            align-items: center ;
            margin-right: 15px ;
            font-size: 40px ;
            color: var(--cor-secundaria);
        }
        h3{
            width: 40px ;
            font-size: 30px ;
            color: var(--branco);
        }
    }

    .btn-open{
            width: 50px ;
            font-size: 30px ;
            color: var(--cor-terciaria);
            position: absolute;
            right: 5px;
            top: 15px ;
            cursor: pointer ;

    }

    .btn-close{
            width: 50px ;
            font-size: 30px ;
            color: var(--cor-terciaria);
            position: absolute;
            right: 5px;
            top: 15px ;
            cursor: pointer ;

    }

}
.open{
    width: 100%;
    color: var(--branco);
    background-color: #212726;
    padding: 5px 15px ;
    margin-top: -5px ;
    margin-bottom: 5px ;
    border-radius: 0 0 10px 10px;
    p{
        text-align: center ;
        strong{
            color: var(--cor-secundaria);
            font-weight: 800 ;
        }
    }

}
`

export const CssBox = () => {
    const [cssBox, setCssBox] = useState(false)

    const openBoxCss = () => {
        if (!cssBox === true) {
            setCssBox(true)

        } else {
            setCssBox(false)

        }
    }


    return (
        <Style>

            <div className="box" >
                <div className="info">
                    <div className="icon"><IoLogoCss3 /></div>
                    <h3>CSS</h3>
                </div>
                {!cssBox === true &&
                    <a className='btn-open' onClick={openBoxCss}><BsFillArrowDownCircleFill /></a>
                }
                {!cssBox === false &&
                    <a className='btn-close' onClick={openBoxCss}><BsArrowUpCircle /></a>
                }
            </div>

            {!cssBox === false &&
                <div className="open">
                    <p>
                        Tenho experiência com <strong>Flex Box</strong> para posicionamento dos elementos. 
                        Busco uma melhor <strong>responsividade</strong> com media query. Conhecimentos 
                        básicos em ainimação no <strong>CSS</strong>.
                    </p>
                </div>
            }


        </Style>
    )
}