import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Home from './routes/Home.jsx';
import CharacterDetail from './routes/CharacterDetail.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h4>NOT FOUND</h4>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'character/:id',
        element: <CharacterDetail />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
