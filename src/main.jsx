import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './routes/app';
import Home from './routes/home/home';
import Search from './routes/search';

import Movie from './routes/movies/movie';
import Movies from './routes/movies/movies';

import About from './routes/about';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Failed to load page</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/movies",
        element: <Movies />
      },
      {
        path: "/movies/:id",
        element: <Movie />
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);