import './App.css';
import { RouterProvider } from 'react-router-dom';
import {routes} from "./Routes/PublicRoutes/PublicRoutes";
import { Toaster } from 'react-hot-toast';
import {useContext} from "react";
import {ThemeContext} from "./Contexts/AuthProvider";

function App() {
    const {theme} = useContext(ThemeContext)
  return (
    <div className="main-bg" data-theme={theme}>
        <RouterProvider router={routes}>

        </RouterProvider>

        <Toaster/>
    </div>
  );
}

export default App;
