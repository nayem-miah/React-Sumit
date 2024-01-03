import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ClockApp from './ClockApp.jsx'
import LiftingApp from './LiftingApp.jsx'
import ContextApp from './ContextApp.jsx'
import RenderPropsApp from './RenderPropsApp.jsx'
import HocApp from './HocApp.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ClockApp /> */}
    {/* <LiftingApp/> */}
    {/* <ContextApp/> */}
    {/* <RenderPropsApp/> */}
    <HocApp/>
  </React.StrictMode>,
)
