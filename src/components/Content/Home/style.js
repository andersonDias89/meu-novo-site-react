import styled from 'styled-components'

export const Home = styled.section`
width: 100% ;
height: calc(100vh + 70px);
background-color: var(--cor-primaria) ;
justify-content: center ;
align-items: center ;
display: flex ;
`

export const Container = styled.div`
width: 80% ;
height: 500px ;
display: flex ;
margin: auto ;


@media screen and (max-width: 1000px){
    flex-direction: column ; 
    justify-content: space-between;
    align-items: center ;
}

`

export const Info = styled.div`
width: 60% ;
animation: Opacity 4s ;
display: flex ;
align-items: center ;
justify-content: center ;
flex-direction: column ;



@media screen and (max-width: 1000px){
    width:100% ;
         padding: 20px 0 ;
}

@keyframes Opacity {
    from {
        opacity:0;
        transform: translateY(-25px) ;
    }

    to {
        opacity: 100% ;
        transform: translateY(0) ;
    }
    
}

.hello{
    font-size: 35px ;
    color: var(--branco) ;
    text-align: center ;

    @media screen and (max-width: 605px){
       font-size: 22px;
    }
}
h1{
    color: var(--cor-secundaria) ;
    font-size: 60px ;
    text-align: center ;

    @media screen and (max-width: 605px){

       font-size: 45px;
    }
    
    span{
        color: var(--branco) ;
        
    }
}
.dev{
    font-size: 35px ;
    color: var(--branco) ;
    text-align: center ;

    @media screen and (max-width: 605px){
       font-size: 20px;
    }

}
.buttons{
    
    width: 100% ;
    display:flex ;
    justify-content: center ;
    margin-top: 20px ;

    .btn-project{
        width: 180px ;
        height: 50px ;
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
        

        @media screen and (max-width: 605px){
        width: 140px ;
        height: 45px ;
      }

    }
    .btn-cv{
        width: 100px ;
        height: 50px ;
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

        @media screen and (max-width: 605px){
        width: 75px ;
        height: 45px ;
      }
  
    }
}




`

export const Image = styled.div`
width: 40% ;
display: flex ;
justify-content: center ;
align-items: center ;
@media screen and (max-width: 1000px){
    width: 100%;
    margin:0 ;
    padding: 20px 0 ;
}
img{
    width: 400px;
    animation: flutter 3s infinite alternate-reverse ease-in-out;
    
    @media screen and (max-width: 1000px){
    width: 250px;
    }
}

@keyframes flutter {
    from {
        transform: translateX(-10px);
    }

    to {
        transform: translateY(-25px);
    }
    
}

`

