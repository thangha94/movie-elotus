import { createRoot } from 'react-dom/client'
import App from './app'

const domNote = document.getElementById('root')
const root = createRoot(domNote)

root.render(<App />)