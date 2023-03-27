import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Accessories from './components/Accessories';
import Adult from './components/Adult';
import Children from './components/Children';
import EyeBrow from './components/EyeBrow';
import Hills from './components/Hills';
import Men from './components/Men';
import NailPolish from './components/NailPolish';
import Other from './components/Other';
import Powder from './components/Powder';
import Shoe from './components/Shoe';
import Slippers from './components/Slippers';
import Women from './components/Women';
import Main from './layout/Main';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/men',
          element: <Men />
        },
        {
          path: '/women',
          element: <Women />
        },
        {
          path: '/other',
          element: <Other />
        },
        {
          path: '/hills',
          element: <Hills />
        },
        {
          path: '/shoe',
          element: <Shoe />
        },
        {
          path: '/slippers',
          element: <Slippers />
        },
        {
          path: '/eye-brow',
          element: <EyeBrow />
        },
        {
          path: '/nail-polish',
          element: <NailPolish />
        },
        {
          path: '/powder',
          element: <Powder />
        },
        {
          path: '/accessories',
          element: <Accessories />
        },
        {
          path: '/children',
          element: <Children />
        },
        {
          path: '/adult',
          element: <Adult />
        },
      ]
    }
  ])

  return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
