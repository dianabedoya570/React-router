import React, { useEffect, useState} from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const Pokemon = () => {
  const [characters, setCharacters] = useState([]);
  //const [loader, setLoader] = useState(true);

    //Async/Await
  const getOnePokemon = async(url) => { 
    const response = await fetch(url);
    const data = await response.json();
    return data.sprites.front_shiny;
  }
  
  const getAllPokemons = async () => {
    const pokemons = [];  
    const url = "https://pokeapi.co/api/v2/pokemon";
    const response = await fetch(url);
    const data = await response.json();


  /* await data.results.forEach(async(item) => { 
    //  console.log("Item", item);
      const image = await getOnePokemon(item.url);
 //     
     pokemons.push({ nada: item.name, image });
     console.log("for each...");
     
    })*/
    for (let i = 0; i < data.results.length; i++) { 
      const item = data.results[i];
      const image = await getOnePokemon(item.url);
      pokemons.push({ name: item.name, image });
    }
    console.log("pokemons", pokemons);
    setCharacters(pokemons);
  };

  useEffect(()=> {
     getAllPokemons();
  }, []);

  const renderPokemons = () => {
    return (
      <div>
        {characters.map((character, index) => (
          <div key={index}>{character.name}</div>
        ))}
      </div>
    );
  };
  return (
    <>
      <Header>Header</Header>
      {characters.length>=1 && renderPokemons()}
      <Footer>Footer</Footer>
    </>
    

  );

};
export default Pokemon;