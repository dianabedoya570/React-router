import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RickAndMorty,Pokemon } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
    errorElement:<div> Hubo un Error!!</div>
  },
  {
    path: "/pokemon",
    element: <Pokemon/>,
  },

  {
    path: "/rickandmorty",
    element: <RickAndMorty/>,
  }

]);

const CustomRouter = () => (<RouterProvider router={router}> </RouterProvider>);

export { CustomRouter}