import React, { useEffect, useState} from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CardList } from "../components/CardList";
import { Loader } from "../components/Loader";


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
        setLoader(false);
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
      {loader && <Loader/>}
      <CardList list={characters} />
      <Footer>Footer</Footer>
  
      
    </>
    

  );

};
export default RickAndMorty;