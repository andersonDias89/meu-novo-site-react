import * as C from './style'

import { Home } from './Home'
import { Sobre } from './Sobre'
import { Projetos } from './Projetos'
import {Contato} from './Contato'

export const Content = () => {
    return (
        <C.Main>
            <Home />
            <Sobre />
            <Projetos />
            <Contato />
        </C.Main>

    )
}