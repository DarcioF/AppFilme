import React,{useState} from 'react';
import {Text, View, Image} from 'react-native';
import styled from 'styled-components';

const Pagina = styled.View`
  flex:1;
`;
const Cabecalho = styled.View`
  height: 60px;
  background-color: #1027AC;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right:20px;
`;

const Busca = styled.TextInput`
  color:#fff;
  font-size: 20px;
`;


const Botao = styled.TouchableOpacity`
  color:#fff;
  font-size: 20px;
`;
const Iconebuscar = styled.Image`
  width:30px;
  height:30px;
`;
const Centro= styled.View`
  align-items: center;
  justify-content: center;
  flex:7;
`;
const Imagem = styled.Image`
  width:80%;
  height:80%;
  border-radius:10px;
`;
const Informacoes = styled.View`
  flex:3;
`;

const Linha1 = styled.View`
  align-items: center;
`;

const Linha12 = styled.View`
  align-items: center;
  flex-direction:row;
  justify-content: space-around;
`;
const Titulo = styled.Text`
  font-size:20px;
  font-weight:bold;
`;

const App =() =>{
  const [nome, alteraNome] = useState('');
  const [filme,alterarFilme] = useState({});

  const buscarFilme = async () =>{
    const req = await fetch(
      `http://www.omdbapi.com/?apikey=ba89b202&t=${nome}`,);
      const resultado = await req.json();
      console.log(resultado);
      alterarFilme(resultado);
  };

  return (
  <Pagina>
    <Cabecalho>
    <Busca placeholder="Digite o nome do filme"
    value={nome}
    placeholderTextColor="#ccc"
    onChangeText={(titulo)=> alteraNome(titulo)}
    ></Busca>
    <Botao activeOpacity={0.5} onPress={buscarFilme}>
      <Iconebuscar source={require('./src/icon/icon1.png')} />
    </Botao>
    </Cabecalho>
    <Centro>
    <Imagem source={{uri: filme.Poster}} />
    </Centro>
    <Informacoes>
      <Linha1>
      <Titulo>{filme.Title}</Titulo>
      </Linha1>
      <Linha12>
  <Text>Ano: {filme.Year}</Text>
  <Text>Duração: {filme.Runtime}</Text>
  <Text>Local: {filme.Country}</Text>
      </Linha12>
      <Linha12>
  <Text>Genero: {filme.Genre}</Text>
  <Text>Diretor: {filme.Director}</Text>
      </Linha12>
      <Linha12>
  <Text>Sinopis: {filme.Plot}</Text>

      </Linha12>
    </Informacoes>
  </Pagina>
  )
}

export default App;