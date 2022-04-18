import styled from 'styled-components'

export const Card = styled.div`
width: 300px ;
height: 400px ;
background-color: #2b2b2b ;
border-radius: 6px ;
box-shadow: 10px 10px 15px #131817 ;
position: relative;
margin-bottom: 30px ;

@media screen and (max-width: 1140px){
    margin-bottom: 20px ;
}
.image{
    display: flex;
    justify-content: center ;
    margin-top: 20px;
    img{
    width: 270px;
    height: 150px ;
    border-radius: 6px ;
    box-shadow: 6px 6px 20px #131817 ;
}
}
h2{
    color: var(--cor-secundaria);
    text-align: center;
    margin: 15px 0;
    font-size: 18px ;
   
}
p{
    padding: 0 20px ;
    text-align: center ;
    color: var(--branco);
}

.buttons{
    display: flex ;
    position: absolute ;
    bottom: 20px ;
    left: 20px ;
    .live{
        width: 100px ;
        height: 35px ;
        background-color:var(--cor-terciaria) ;
        border: none ;
        outline:0 ;
        cursor: pointer ;
        font-weight:800;
        text-transform:uppercase;
        margin-right: 10px ;
        border-radius: 5px;
        color:var(--branco) ;
        box-shadow: 5px 5px 10px var(--cor-sombra) ;
        display: flex ;
        align-items:center ;
        justify-content: center ;
        text-decoration:none ;

    }
    .repo{
        width: 100px ;
        height: 35px ;
        border: 2px solid var(--cor-terciaria);
        outline:0 ;
        cursor: pointer ;
        font-weight:800;
        text-transform:uppercase;
        background-color: transparent ;
        color: var(--cor-terciaria) ;
        border-radius: 5px;
        box-shadow: 5px 5px 10px var(--cor-sombra) ;
        display: flex ;
        align-items:center ;
        justify-content: center ;
        text-decoration:none ;

    }
}
`
