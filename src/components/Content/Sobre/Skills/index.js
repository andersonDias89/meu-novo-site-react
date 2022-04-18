import * as C from './style'

import { HtmlBox } from './Box/HtmlBox'
import { CssBox } from './Box/CssBox'
import { JsBox } from './Box/JsBox'
import { ReactBox } from './Box/ReactBox'
import { GitBox } from './Box/GitBox'

export const Skills = () => {
    return (
        <C.Skills>
            <HtmlBox />
            <CssBox />
            <JsBox />
            <ReactBox />
            <GitBox />
        </C.Skills>
    )
}