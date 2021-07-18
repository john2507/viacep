
import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';


import { Container, 
    Title, 
    FieldInput,
    InputCep,
    // InputCepPesquisar,
    GlobalStyle,
    BorderForm, 
    FormCepDiv, 
     BunttonCep,
    InputButton
   
  } 

    from './styles'

function App() {
  function onSubmit(values, actions) {
    console.log('SUBMIT', values);
  }

  function onBlurCep(ev, setFieldValue) {
    const { value } = ev.target;

    const cep = value?.replace(/[^0-9]/g, '');

    if (cep?.length !== 8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setFieldValue('logradouro', data.logradouro);
        setFieldValue('numero', data.siafi);
        setFieldValue('complemento', data.complemento);
        setFieldValue('bairro', data.bairro);
        setFieldValue('cidade', data.localidade);
        setFieldValue('uf', data.uf);
      });
  }

  return (
    
    <>
     <GlobalStyle/>
     
      <div className="App">
     
      <Formik
      
        onSubmit={onSubmit}
        validateOnMount
        initialValues={{
          cep: '',
          logradouro: '',
          numero: '',
          complemento: '',
          bairro: '',
          cidade: '',
          uf: '',
        }}

        render={({ isValid, setFieldValue }) => (
         
            <FormCepDiv>
          <BorderForm>
          <Form>
            
          <Title>BUSCA CEP</Title>

          <InputButton>
            <FieldInput 
            name="cep" 
            type="text" 
            placeholder="Digite o seu cep"
            onBlur={(ev) => onBlurCep(ev, setFieldValue)}
            />
            <BunttonCep type="submit" disabled={!isValid}>PESQUISAR CEP</BunttonCep>
          </InputButton>

            <label htmlFor="LOGRADOURO">Logradouro</label>
            <FieldInput 
            type="text" 
            name="logradouro" 
            placeholder="Logradouro"
            />
            
            <label htmlFor="bairro">Número</label>
            <FieldInput 
            type="text" 
            name="numero"
            placeholder="Número" 
            />

            <label htmlFor="complemento">Complemento</label>
            <FieldInput 
            type="text" 
            name="complemento"
            placeholder="Complemento"
            />
            
            <label htmlFor="bairro">Bairro</label>
            <FieldInput 
            type="text" 
            name="bairro"
            placeholder="Bairro"
            />
            
            <label htmlFor="cidade">cidade</label>
            <FieldInput 
            type="text" 
            name="cidade" 
            placeholder="Cidade"
            />

            <label htmlFor="uf">Estado</label>
            <FieldInput type="text" name="uf" />
        </Form>
          
          </BorderForm>

        </FormCepDiv>
      
        )}
      />
    </div>

    </>
  
  );
}
export default App;
    
