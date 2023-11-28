import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginView from './views/LoginView'
import Dashboard from './views/Sidebar'

function App() {

  return (
    <>
      <LoginView/>
      <Dashboard/>
    </>
  )
}

export default App
