import {BrowserRouter} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import Routing_App from './POC/Routing_App'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <Routing_App />
  </BrowserRouter>
   
)
