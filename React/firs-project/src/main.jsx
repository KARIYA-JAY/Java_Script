import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Mast from './master.jsx'

createRoot(document.getElementById('root1')).render(
 <>
    <Mast />
    <App />
  </>
)
