import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Component from './component.jsx'
import New from '../New.jsx'
import { Codereviewtrack } from './Codereviewtrack.jsx'
import { Provider } from 'react-redux'
import { store } from './store.js'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)
