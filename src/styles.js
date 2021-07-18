import styled, { createGlobalStyle, css   } from 'styled-components';

import { Formik, Field, Form } from 'formik';





export const GlobalStyle = createGlobalStyle`

html{
    height: 100%;
    
}
body {
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(to bottom, blue, #e1eec3);
    height: 100%;
    margin: 50px;
    color: #555;
}
`;

export const SharedStyles = css`
background-color: #eee;
height: 40px;
border-radius: 5px;
border: 1px;
margin: 10px, 0 20px 0;
padding: 20px;
box-sizing: border-box;
`
export const FieldInput = styled(Field)`
margin-bottom: 10px;
align-items: center;
justify-content: center;
display: flow-root;
width: 100%;
${SharedStyles}
`

export const Container = styled.div`
`;

export const Title = styled.h1`
color: blue;
text-align: center;

`;

export const FormCepDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
padding: 0 20px;

`

export const BorderForm = styled.form`
width: 100%;
max-width: 500px;
padding: 40px;
background-color: #fff;
border-radius: 50px;
box-sizing: border-box;
box-shadow:0px 0px 20px 0px rgba(0,0,0,0.2);

`
export const InputCep = styled.input`

display: block;
width: 100%;
height: 30px;
margin-bottom: 10px;
${SharedStyles}
`
export const BunttonCep = styled.button`
margin-bottom: 2px;
margin-top: 15px;
align-items: center;
justify-content: center;
background-color: blue;
color: #fff;
font-size: .8rem;
border: 0;
border-radius: 5px;
height: 40px;
padding: 0 20px;
cursor: pointer;
box-sizing: border-box;

`

export const InputCepPesquisar = styled.input`
justify-content: center;
align-items: center;
margin-bottom: 10px;
height: 30px;

`

export const InputButton = styled.div`
margin-bottom: 10px;
display: flex;
flex-direction: column;
`


