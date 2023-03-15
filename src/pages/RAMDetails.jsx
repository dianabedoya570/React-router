import React, { useContext, useEffect, useState } from "react";
import { RAMDetail } from "../components/RAMDetail";
import { useAsyncError, useParams } from "react-router-dom";
import { Context } from "../context";
import { getOneCharacter } from "../Services/rickAndMortyAPI";

const RAMDetails = () => {
  const [character, setCharacter] = useState({});
  const { id: idParam } = useParams();
  const context = useContext(Context);
  console.log("Context in details", context);
  const { rickAndMorty } = context || {};
  const { characters } = rickAndMorty || [];
  const { id, species, name, status, image, gender } = character || {};

  useEffect(() => {
    const item = characters.find((item) => item.id === +idParam);
    console.log("Item", item);
    if (item) {
      setCharacter(item);
    } else {
      getData(idParam);
    }
  }, []);

  const getData = async (id) => {
    const data = await getOneCharacter(id);
    setCharacter(data);
  };

  return (
    <RAMDetail
      id={id}
      name={name}
      species={species}
      image={image}
      status={status}
      gender={gender}
    ></RAMDetail>
  );
};
export default RAMDetails;
