import React from "react";
import { CustomRouter } from "./routerP";
import { Context, initialContext } from "./context";
import "./App.scss";
// se definen los objetos del initial context

function App() {
  return (
    //se llama el contexto para que envuelva toda la aplicación
    <Context.Provider value={initialContext}>
      <div className="App">
        <CustomRouter />
      </div>
    </Context.Provider>
  );
}

export default App;
