import React, { useEffect, useState} from "react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Card } from "../components/Card";

const RickAndMorty = () => {
  const [characters, setCharacters] = useState([]);


  const getAllCharacters = () => {
    const url = 'https://rickandmortyapi.com/api/character';
    fetch(url) //request
      //Resolve promise
      .then((response) => response.json()) //promesa del fetch
      .then((data) => {  //es la promesa de la funcion json() que es una funciona asicrona
        setCharacters(data.results);
      })
      //rejected
      .catch(() => {
        console.log("Error", console.error);
      });
  };

  //Render
  useEffect(() => { 
   
    getAllCharacters();
  },[])

  return (
    <>
      <Header>Header</Header>
      <div >
        
        {characters.length>=1 &&  characters.map((character, index) => (
          <Card
            key={index}
            name={character.name}
            image={character.image} />
          ))
        }
      </div>
      <Footer>Footer</Footer>
    </>
    

  );

};
export default RickAndMorty;