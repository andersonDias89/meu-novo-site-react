import styled from 'styled-components' 

export const Contato = styled.section`
width: 100%;
background-color: var(--cor-primaria-clara) ;
padding: 100px 0 ;
display: flex ;
justify-content: center ;
align-items: center ;

`

export const Container = styled.div`
width: 80% ;
margin: auto ;
display: flex;
justify-content: center ;
align-items: center ;

@media screen and (max-width: 850px){
    width: 90% ;
    flex-direction: column ;
}
`

export const Image = styled.div`
width: 50% ;
display: flex ;
justify-content:center ;
align-items: center ;
    @media screen and (max-width: 700px){
        width: 90%;
     }
img{
    width: 400px;

    @media screen and (max-width: 850px){
    width: 200px;
}
}
`

export const Info = styled.div`
width: 50%;
display: flex ;
justify-content: center ;
align-items: center ;

@media screen and (max-width: 700px){
        width: 90%;
     }

.container{
    width: 80% ;
    h2{
        color: var(--branco) ;
        font-size: 60px;
        margin-bottom: 20px ;
        text-align:center;

        @media screen and (max-width: 850px){
            width: 100% ;
            font-size: 40px;
        
        }
    }
    
    .data{
        width: 100% ;
        .phone{
            
            margin-bottom: 2px ;
            p{
                font-size: 20px ;
                text-align:center;
                color: var(--branco);
            }
  
            @media screen and (max-width: 850px){
            font-size: 15px;
            }
            
        }

        .email{
           
            p{
                font-size: 20px ;
                text-align:center;
                color: var(--branco);
                @media screen and (max-width: 700px){
                    font-size: 13px ;
                  }
            }
  
            @media screen and (max-width: 850px){
            font-size: 15px;
        
        }
            

        }
    }

    .icos-redes{
        display: flex;
        font-size: 50px ;
        margin-top: 20px ;
        justify-content: center ;
            align-items: center ;
        a{  
            display: flex;
            justify-content: center ;
            align-items: center ;
            color: var(--cor-terciaria) ;
            padding: 0 10px ;
            
            

        }
    }
}
    
`