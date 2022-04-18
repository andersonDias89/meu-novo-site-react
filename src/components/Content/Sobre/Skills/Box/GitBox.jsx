import styled from 'styled-components'
import React, { useState } from 'react'

import { BsGithub } from 'react-icons/bs'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import { BsArrowUpCircle } from 'react-icons/bs'

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
        a{
            color: var(--cor-terciaria);
            font-weight: 800 ;
            text-decoration: none ;
        }
        strong{
            color: var(--cor-secundaria);
            font-weight: 800 ;
        }
    }

}
`

export const GitBox = () => {
    const [gitBox, setGitBox] = useState(false)

    const openBoxGit = () => {
        if (!gitBox === true) {
            setGitBox(true)

        } else {
            setGitBox(false)

        }
    }


    return (
        <Style>

            <div className="box" >
                <div className="info">
                    <div className="icon"><BsGithub /></div>
                    <h3>GitHub</h3>
                </div>
                {!gitBox === true &&
                    <a className='btn-open' onClick={openBoxGit}><BsFillArrowDownCircleFill /></a>
                }
                {!gitBox === false &&
                    <a className='btn-close' onClick={openBoxGit}><BsArrowUpCircle /></a>
                }
            </div>

            {!gitBox === false &&
                <div className="open">
                    <p>
                        Tenho boa experiência com git / <strong>GitHub</strong> para <strong>versionamento de códigos</strong>.
                        Criações de <strong>repositórios</strong>, novas branchs, pull request e commits. Para visualizar
                        o meu perfil no GitHub <a href='https://github.com/andersonDias89' target='_blank'>clique aqui</a>
                    </p>
                </div>
            }


        </Style>
    )
}