import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import Nabvar from './components/Nabvar.jsx'
import MyContador from './components/Button.jsx';
import Productos from './components/Productos.jsx';
import TresEnlinea from './components/TresEnLinea.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <Nabvar />
    <Productos />
    <TresEnlinea />
    </>
  </StrictMode>,
)
