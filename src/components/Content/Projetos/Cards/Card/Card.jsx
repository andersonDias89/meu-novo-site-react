import React from 'react'
import * as C from './style'

export const Card = ({img, alt, title, info, live, repo}) => {
    return (
        <C.Card>
            <div className="image">
                <img src={img} alt={alt} />
            </div>
            <h2>{title}</h2>
            <p>{info}</p>
            <div className="buttons">
                <a target='_blank' className='live' href={live}>Live</a>
                <a target='_blank' className='repo' href={repo}>Repo</a>
            </div>
        </C.Card>
    )
}