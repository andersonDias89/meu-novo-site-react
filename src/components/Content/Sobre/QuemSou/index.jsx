import React from 'react'
import * as C from './style'

import MyPhoto from '../../../../assets/img/Photo-Anderson-Dias.jpeg'

export const QuemSou = () => {
    return (
        <C.QuemSou>
            <img src={MyPhoto} alt="Foto de Anderson Dias" />
            <h2><span>Quem</span> eu sou?</h2>
            <p className='p1'>Trabalhei durante alguns anos na área de design, e autônomo como fotógrafo de
                eventos. Atualmente estou no 1º período da minha graduação em <strong>análise e
                    desenvolvimento de sistemas</strong> pela universidade Estácio de Sá, Ponta Negra RN.
            </p>

            <p className='p2'>Estou em uma conversão de carreira para a <strong>área tech</strong>, preferencialmente
                no desenvolvimento de sistemas <strong>front-end</strong>, na qual, tenho desejo de atuar profissionalmente.
                Cada dia fico mais entusiasmado
                por cada conhecimento que venho adquirindo nessa nova trajetória profissional.</p>

        </C.QuemSou>
    )
}