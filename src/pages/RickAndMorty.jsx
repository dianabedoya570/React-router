import React, { useEffect, useState} from "react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CardList } from "../components/CardList";


const RickAndMorty = () => {
  const [characters, setCharacters] = useState([]);
  const [loader, setLoader] = useState(true);

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
    setLoader(false);
    getAllCharacters();
  },[])

  return (
    <>
      <Header>Header</Header>
      {loader && <div> Loading...</div>}
      <CardList list={characters} />
      <Footer>Footer</Footer>
    </>
    

  );

};
export default RickAndMorty;