import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {Auth0Provider} from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
   domain='dev-r8vwf02ysncfjcdn.us.auth0.com'
   clientId='d41iIN41TpaN1ICHcIMUtWOh120avBHp'
   authorizationParams={{
    redirect_uri: window.location.origin
  }} > 
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Auth0Provider>
)
