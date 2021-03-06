import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    min-width: 100%;   

    input{
    outline: none;
    cursor: text;
    }



.box-user-information{
    display: flex;
    flex-direction: row;

    align-items: center;
}

.user-image{
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    border-radius: 50%;
}



.notification{
    justify-content: flex-start;

    color: white;
    background-color: #DB21BD;
    border: 3px solid white;
    border-radius: 50%;
    position: absolute;
    width: 20px;
    height: 20px;
    text-align: center;
    font-size: .7em;
}

.user-name{
    font-weight: 400;
    font-size: 16px;

    color: #615858 ;
    margin-left: 1em;
}



.box-images{
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-evenly;
    width: 8em;
}



.box-images button{

    cursor: pointer;

    background-color: #986CDF;
    border-radius: 50%;
    border: none;
    padding: 1em;

    
}

.box-images img{
 cursor: pointer;
}

.line{
    border: solid 0.5px;
    width: 95%;
    color:#d3cbcb;
    align-self: center  ;
}
.box-body{
    background-color: #F5F5F5;
    min-height: 100vh;
    width: 66.5em;
    padding: 2.5em 2.5em;
}

.box-organization-body{
    background-color: white;
    padding: 2em 2.5em;
    margin-bottom: 2em;
}

.box-alunos-adm{
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-bottom: 1em;
}


.barra{
    border:#986CDF 0.2em solid;
    background-color: #986CDF;
    border-radius: 1.3em;
    height: 1.8em;
    margin-right: 1em;
}

.aluno-novo{
    font-size: 2em;
    font-weight: 700;
    color: #3C3939;
}



.inputs-cadastro{
    display: flex;
    flex-direction: row;
}

.botao-cadastrar button:hover{
background-color: #e840cd;

}

.botao-cadastrar{
    display: flex;
    align-items: flex-end;
    padding-bottom: 0.5em;

}

.botao-cadastrar button{
    
    font-weight: 700;

    background: #E911C6;
    color: white;
    border-radius: 2em;
    padding: 0.6em 1.5em;
    border: none;

    cursor: pointer;
}

.format-inputs{
    display: flex;
    flex-direction: row;

    margin-right: 2em;
    padding: 0.5em 0em;

    justify-content: flex-end;
    align-items: center;
}

.format-inputs input {
    margin-left: 0.5em;
    border-radius: 0.3em;
    border: solid 1px #A8A8A8;
    height: 2em;
}

.inputs-esquerda{
    margin-right: 2em
}



.tabela-usuarios{
    border-collapse: collapse;
    width: 100%;
    align-items: flex-start;
    margin-top: 2em;
}

thead{
    background-color: #986CDF;
}

tbody{
    font-size: 15px;
}


th{
    padding: 1.5em  1em;
    color: white;
    text-align: left;
}

.linha-alternada{
    background-color: #F2EAE9;
}

td{
    padding: 1.5em 1em;
    color: #6D6868;
}

td button{
    padding: 0.5em;
    border-radius: 50%;
    border:none;
    background-color: #565656;
    opacity: 50%;
    cursor: pointer;
}

.buttom-option > button{
    visibility: hidden;
}

tr:hover{
    .buttom-option > button{
    visibility: visible;
} 
}

td button:hover{
    opacity: 100%;
}

.buttom-option{
    padding: 1.5em 0.5em;
}


`

const Conteudo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    min-height: 100vh;

`

export {Container, Conteudo }