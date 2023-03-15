import React from "react";

export const initialContext = {
  rickAndMorty: {
    characters: [],
  },
  pokemon: {
    characters: [],
  },
  redirectDetailRoute: "",
};
export const Context = React.createContext(initialContext);
