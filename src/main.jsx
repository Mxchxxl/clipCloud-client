import './index.css'

import { persistor, store } from './redux/store.js'

import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter >
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
