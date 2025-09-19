import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider, Navigate } from 'react-router-dom';   
import './index.css';
import './App.css'
import Arms from './components/Arms.jsx';
import Workouts from './components/Workouts.jsx';
import Bones from './components/Bones.jsx';
import Back from './components/Back.jsx';
import Stomach from './components/Stomach.jsx';
import ExerciseList from './components/ExerciseList.jsx';



const router = createHashRouter([

  { path: "/", element: <Navigate to="/workouts" replace /> },
  {
    path: "/workouts",
    element: <Workouts />,          
    children: [
     // { index: true, element: <div style={{ marginTop: 16 }}>Välj en kategori ovan.</div> },
      { path: "arms", element: <Arms /> },
      { path: "bones", element: <Bones /> },
      { path: "back", element: <Back /> },
      { path: "stomach", element: <Stomach /> },
      { path: "exerciseList", element: <ExerciseList /> },
    ],
  },
    { path: "*", element: <Navigate to="/workouts" replace /> },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>
);
