import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications'
import About from './components/about.jsx';
import Error from './components/error.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <MantineProvider>
    <Notifications/>
    <BrowserRouter>
    <Routes>
        <Route path="/" exact={true} element={<App />} />
        <Route path="About" exact={true} element={<About />} />
        <Route path="*" exact={true} element={<Error />} />
      </Routes>
    </BrowserRouter>
  </MantineProvider>
</React.StrictMode>,
)
