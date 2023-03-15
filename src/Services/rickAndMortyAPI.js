/*const getAllCharacters = () => {
  const url = "https://rickandmortyapi.com/api/character";
  fetch(url) //request
    //Resolve promise
    .then((response) => response.json()) //promesa del fetch
    .then((data) => {
      //es la promesa de la funcion json() que es una funciona asicrona
      setCharacters(data.results);
      
    })
    //rejected
    .catch(() => {
      console.log("Error", console.error);
    });
};
*/

export const getAllCharacters = async () => {
  const url = "https://rickandmortyapi.com/api/character";
  try {
    const request = await fetch(url);
    const data = await request.json();
    return data.results;
  } catch (error) {
    return error;
  }
};

export const getOneCharacter = async (id) => {
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  try {
    const request = await fetch(url);
    const data = await request.json();
    return data;
  } catch (error) {
    return error;
  }
};
