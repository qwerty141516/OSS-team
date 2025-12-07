import React from 'react'
import { createRoot } from 'react-dom/client'
import RandomStoryGenerator from './RandomStoryGenerator.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RandomStoryGenerator />
  </React.StrictMode>
)
