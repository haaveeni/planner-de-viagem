import React from 'react' //react global: react, react native (mobile), reactTv, etc
import ReactDOM from 'react-dom/client' //react para web
import { App } from './app'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
