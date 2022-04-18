import styled from 'styled-components'




export const Sobre = styled.section`
width: 100%;
background-color: var(--cor-primaria-clara);
padding: 100px 0 ;
@media screen and (max-width: 900px){
    padding: 50px 0 ;
}

`

export const Container = styled.div`
width: 80%;
margin: auto ;
display: flex ;


@media screen and (max-width: 1000px){
    width: 90%;
    flex-direction: column ; 
    justify-content: space-between;
    align-items: center ;
}
`


