import styled from 'styled-components'

export const Menu = styled.header`
position: fixed ;
z-index: 1 ;
width: 100% ;
height: 70px ;
background-color: var(--cor-primaria) ;
display: flex ;
align-items: center;

`

export const Container = styled.div`
width: 80% ;
margin: auto ;
display: flex ;
align-items: center ;
position: relative ;
border-bottom: 1px solid var(--branco) ;
padding-bottom: 10px;

`

export const Name = styled.div`
p{
    font-size: var(--tam-h2) ;
    font-weight: 700 ;
    color: var(--branco) ;
    margin: 0 20px ;
    @media screen and (max-width: 605px){
        font-size: 20px ;
      }

    span{
        color:  var(--cor-secundaria);

    }
}

`
export const NavBar = styled.nav`
position: absolute ;
right: 0 ;
@media screen and (max-width: 870px){
       display: none ;
    }
ul{
    display: flex ;
    justify-content: center ;
    align-items: center ;

  
    li{
        margin: 0 20px ;
        list-style-type: none;
        a{
            color: var(--branco) ;
            text-decoration: none;
            font-weight: 800 ;
        }
    }
}

`

export const Toggle = styled.nav`
position: absolute ;
right: 0 ;

@media screen and (min-width: 871px) {
    display: none ;
}
a{
    font-size: 30px ;
    color: var(--branco) ;
}

ul{
    right: 0;
    top: 0 ;
    background-color:rgba(25, 31, 30, 0.9);
    width: 100% ;
    height: 100%;
    position: fixed;
    z-index: 2;
   
    .btn-close{
       
        position: relative ;
        a{  
            font-size: 30px;
            position: absolute;
            top: 11px ;
            right: 40px ;
            color: var(--branco) ;
            font-weight: 800 ;
            
        }
    }
    .links{
        animation: Opacity 0.7s ;
        padding-top: 200px ;
        width: 100% ;
        display:flex ;
        flex-direction: column ;
        justify-content: center;
        align-items: center ;

        li{
            margin-bottom: 30px ;
            list-style-type: none;

            a{
                text-decoration:none;
                color: var(--branco) ;
                font-size: 30px ;
                font-weight: 800 ;
            }
        }


    }

}

`