import styled from 'styled-components'
import React, {useState} from 'react'

import { IoLogoJavascript } from 'react-icons/io'
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

export const JsBox = () => {
    const [jsBox, setJsBox] = useState(false)

    const openBoxJs = () => {
        if (!jsBox === true) {
            setJsBox(true)

        } else {
            setJsBox(false)

        }
    }
  

    return (
        <Style>
            <div className="box" >
                <div className="info">
                    <div className="icon"><IoLogoJavascript /></div>
                    <h3>JavaScript</h3>
                </div>
                {!jsBox === true &&
                    <a className='btn-open' onClick={openBoxJs}><BsFillArrowDownCircleFill /></a>
                }
                {!jsBox === false &&
                    <a className='btn-close' onClick={openBoxJs}><BsArrowUpCircle /></a>
                }
            </div>

            {!jsBox === false &&
                <div className="open">
                    <p>
                        Conhecimento dos principais conceitos da <strong>linguagem</strong> voltada para o <strong>desenvolvimento 
                        front-end</strong>. Venho estudando e praticando para aprimorar mais o domínio com a linguagem <strong>JavaScript</strong>.
                    </p>
                </div>
            }


        </Style>
    )
}