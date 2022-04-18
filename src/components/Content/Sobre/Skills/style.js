import styled from "styled-components";

export const Skills = styled.div`
width: 50%;
display: flex ;
flex-wrap:wrap;
flex-direction: column;
justify-content: center ;
align-items: center;
padding: 0 0 0 15px;


@media screen and (max-width: 1000px){
    width: 95%;
}

@media screen and (max-width: 600px) {
    padding: 0 ;
}
`