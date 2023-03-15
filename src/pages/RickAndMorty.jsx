import React, { useEffect, useState, useContext } from "react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CardList } from "../components/CardList";
import { Context } from "../context";
import { getAllCharacters } from "../Services/rickAndMortyAPI";
import { useCharacters } from "../components/hooks";
import { useData } from "../components/hooks";

const RickAndMorty = () => {
  //  const { characters } = useCharacters("ram");
  const { data: characters } = useData([], getAllCharacters);
  const [loader, setLoader] = useState(true);
  const context = useContext(Context);
  console.log("Characters", characters);
  //rendered
  useEffect(() => {
    //  context.rickAndMorty.characters = characters;

    context.redirectDetailsRoute = "/rickandmorty";
    setLoader(false);
  }, []);

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
