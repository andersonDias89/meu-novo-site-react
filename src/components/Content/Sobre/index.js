import * as C from './style'

import { Skills } from './Skills'
import { QuemSou } from './QuemSou'



export const Sobre = () => {

    return (

        <C.Sobre id="sobre">
            <C.Container>
                <QuemSou />
                <Skills />
            </C.Container>
        </C.Sobre>

    )
}