

import './App.css';
import Homepage from './components/Homepage/Homepage';
import Coins from './components/Coins/Coins';
import {
  createBrowserRouter,
  RouterProvider,
  
 
} from "react-router-dom";
import RootLayout from './components/Routes/RootLayout';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement:<NotFound></NotFound>,

    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "/coins",
        element: <Coins></Coins>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ]
  },

]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
