import styled from 'styled-components'

export const QuemSou = styled.div`
width: 50% ;
height: 600px ;
/* border: 6px solid var(--cor-terciaria); */
border-radius: 15px 60px ;
padding: 30px ;
box-shadow: 10px 10px 15px var(--cor-primaria) ;

@media screen and (max-width: 1000px){
    width: 95% ;
    height: 350px;
    margin: 40px;
    
}

@media screen and (max-width: 1119px){
    height: 650px ;
}

@media screen and (max-width: 600px){
    height: 700px ;
}

@media screen and (max-width: 360px){
    height: 800px ;
}
img{
    width: 150px ;
    border-radius: 50% ;
    margin-bottom: -20px ;
    margin-left: 20px ;
    box-shadow: 10px 10px 15px var(--cor-primaria) ;
}
h2{
    color: var(--branco) ;
    font-size: 45px ;
    display: inline-block;
    span{
        color: var(--cor-secundaria) ;

    }

    @media screen and (max-width: 1145px){
        font-size: 45px ;
    }

    @media screen and (max-width: 1119px){
        font-size: 38px ;
    
    }

    @media screen and (max-width: 523px){
        font-size: 30px ;
    }

    @media screen and (max-width: 360px){
    font-size: 25px;
}
}
h2::before{
    content:'{';
    color: var(--cor-terciaria) ;
    font-size: 80px ;

    @media screen and (max-width: 523px){
        font-size: 40px ;
    }
}
h2::after{
    content:'}';
    color: var(--cor-terciaria) ;
    font-size: 80px ;

    @media screen and (max-width: 523px){
        font-size: 40px ;
    }
}
p{
    color: var(--branco);
    margin-bottom: 10px ;
    margin-top: 10px;

    strong{
        color: var(--cor-secundaria);

    }
}


`