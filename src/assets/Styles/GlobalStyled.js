import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`

:root{
  --cor-primaria:#191f1e;
  --cor-primaria-clara:#262e2d;
  --cor-secundaria:#00FFDD;
  --cor-terciaria:#ff5b00;
  --cor-sombra:#1a1a1a;
  --branco:#DFDFDE;
  --cor-neutra:#464646;

  --tam-h1: 40px;
  --tam-h2: 30px;
}



*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  scroll-behavior: smooth;
}

body{
  font-family: 'Quicksand', sans-serif ;
  letter-spacing: 1.2px ;
}

::-webkit-scrollbar {
    width: 8px;
}
  
::-webkit-scrollbar-track {
    background-color: #171717;
}
  
::-webkit-scrollbar-thumb {
    background-color: var(--cor-terciaria);
    border-radius: 10px;
}

`