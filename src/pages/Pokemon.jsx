import React, { useEffect, useState} from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
//import { Card } from "../components/CardList/Card";
import { CardList } from "../components/CardList";
import { Loader } from "../components/Loader";
const Pokemon = () => {
  const [characters, setCharacters] = useState([]);
  const [loader, setLoader] = useState(true);

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
/*
    for (let i = 0; i < data.results.length; i++) { 
      const item = data.results[i];
      const image = await getOnePokemon(item.url);
      pokemons.push({ name: item.name, image });
    }*/
    // For in trabaja con el indice en el arreglo
    // For of trabaja con el valor en el arreglo
    for (let item of data.results) { 
  
      const image = await getOnePokemon(item.url);
      pokemons.push({ name: item.name, image });
    }

    console.log("pokemons", pokemons);
    setLoader(false)
    setCharacters(pokemons);
  };

  useEffect(()=> {
     getAllPokemons();
  }, []);

  const renderPokemons = () => {
    return (
      <div>
       {/*characters.map((character, index) => (
          <div key={index}>{character.name}
          <img src={character.image} alt={character.name} />
          </div>
          
       )) //Forma con card
          characters.length >= 1 && characters.map((character, index) => (
            <Card
         key={index}
          name={character.name}
          image={character.image} />
          ))*/
          <CardList list={characters} />
       
        }
      </div>
    );
  };
  return (
    <>
      <Header>Header</Header>
      { loader && <Loader/>}
      {characters.length>=1 && renderPokemons()}
      <Footer>Footer</Footer>
    </>
    

  );

};
export default Pokemon;