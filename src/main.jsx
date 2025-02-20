import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App/App'
import FriendList from './components/FriendList/FriendList'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <FriendList />
  </StrictMode>,
)
