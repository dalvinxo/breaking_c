import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Frases from "./components/Frases";

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
  margin-top: 10rem; 
`;

const Boton = styled.button`
  background-color: green;
  background-size: 30%;
  font-family: "Arial";
  margin-top: 3rem;
  padding: 1rem 2rem;
  font-size: 2rem;
  border: 2px solid black;

  :hover{
    cursor:pointer;
    background-size: 40%;
    background-color:blue;
  }


`;

function App() {
  
  const [frase, setFrase] = useState({})

  const consultarAPI = async () => {
    //forma fetch
    /*    let api = fetch("https://breakingbadapi.com/api/quote/random");
    let frases = api.then(obj=> obj.json());
    frases.then(sent => console.log(sent[0]));
*/
    //forma async/await
    let api = await fetch("https://breakingbadapi.com/api/quote/random");
    let sentence = await api.json();
    setFrase(sentence[0]);
  };

  useEffect(() => {
    consultarAPI();
  }, [])

  return (
    <Contenedor>
      <Boton onClick={consultarAPI}>Breaking Bad</Boton>
      <Frases frases={frase}/>
    </Contenedor>
  );
}

export default App;
