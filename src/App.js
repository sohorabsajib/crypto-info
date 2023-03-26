

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
import CoinDetails from './components/CoinDetails/CoinDetails';
import UsAddress from './components/Contact/UsAddress';
import BdAddress from './components/Contact/BdAddress';



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <NotFound></NotFound>,

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
        path: "/coin-details/:id",
        element: <CoinDetails></CoinDetails>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
        children: [
          {
            path: "bd-address",
            element: <BdAddress></BdAddress>
          },
          {
            path:"us-address",
            element:<UsAddress></UsAddress>
          },
        ],
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
